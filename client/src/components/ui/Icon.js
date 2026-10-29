import React from 'react';
import {
  BookOpen, Users, Heart, School, GraduationCap, Calendar, Package, Sprout, Target, Award,
  ShieldCheck, FileCheck2, Landmark, BadgeCheck, MapPin, Phone, Mail, MessageCircle,
} from 'lucide-react';

// Maps the icon names used in data/ files to Lucide components, so content files stay JSX-free.
const icons = {
  book: BookOpen,
  users: Users,
  heart: Heart,
  school: School,
  graduation: GraduationCap,
  teacher: GraduationCap,
  calendar: Calendar,
  package: Package,
  sprout: Sprout,
  target: Target,
  award: Award,
  shield: ShieldCheck,
  file: FileCheck2,
  landmark: Landmark,
  badge: BadgeCheck,
  pin: MapPin,
  phone: Phone,
  mail: Mail,
  whatsapp: MessageCircle,
};

const Icon = ({ name, size = 24, ...rest }) => {
  const Component = icons[name] || Heart;
  return <Component size={size} aria-hidden="true" {...rest} />;
};

export default Icon;
