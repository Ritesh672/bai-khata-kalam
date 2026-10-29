import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Lightbox from '../../components/ui/Lightbox';
import { images } from '../../data/images';
import { fadeIn, stagger, viewportOnce } from '../../lib/motion';
import styles from './Impact.module.css';

const gallery = [
  images.classroomTeacher,
  images.pressClipping,
  images.girlInUniform,
  images.studentsListening,
  images.friends,
  images.girlWithBook,
  images.classroomDesks,
  images.happyStudents,
];

const caption = (image) =>
  image.representative ? `Representative image · Photo: ${image.credit} / Unsplash` : 'Bai Khata Kalam in the local press, February 2026';

// Masonry gallery; click any photo to open it full screen.
const GallerySection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const lightboxItems = gallery.map((image) => ({ src: image.src(1600), alt: image.alt, caption: caption(image) }));

  return (
    <section className={`section ${styles.gallery}`}>
      <div className="container">
        <SectionHeader
          title="Visualizing Our Work"
          subtitle="Classroom life in India, alongside real moments from our school."
        />
        <motion.ul className={styles.masonry} variants={stagger(0.06)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          {gallery.map((image, index) => (
            <motion.li key={image.alt} variants={fadeIn} className={styles.masonryItem}>
              <button type="button" className={styles.galleryButton} onClick={() => setOpenIndex(index)}>
                <img
                  src={image.src(600)}
                  srcSet={image.representative ? `${image.src(400)} 400w, ${image.src(800)} 800w` : undefined}
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={image.alt}
                  loading="lazy"
                />
                <span className={styles.galleryOverlay}>
                  <Maximize2 size={18} aria-hidden="true" />
                  <span>{image.representative ? 'Representative image' : 'Real coverage, Feb 2026'}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Lightbox items={lightboxItems} index={openIndex} onClose={() => setOpenIndex(null)} onChange={setOpenIndex} />
    </section>
  );
};

export default GallerySection;
