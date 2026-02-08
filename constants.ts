import { Shield, Zap, Code2, Globe, Box, Coins, Github, Twitter, Disc } from 'lucide-react';
import { Feature, SocialLink } from './types';

export const SITE_NAME = "PluginsHub";

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Verified Code',
    description: 'Every line of code is statically analyzed and manually reviewed. Zero malware tolerance.',
    icon: Shield,
  },
  {
    id: '2',
    title: 'Global CDN',
    description: 'Plugins are served from 240+ edge locations. Download speeds that max out your connection.',
    icon: Zap,
  },
  {
    id: '3',
    title: 'REST API',
    description: 'Headless-first design. Automate your server deployments with our comprehensive API.',
    icon: Code2,
  },
  {
    id: '4',
    title: 'Smart Search',
    description: 'Find exactly what you need with instant, fuzzy-search capabilities and smart tagging.',
    icon: Globe,
  },
  {
    id: '5',
    title: 'Version Control',
    description: 'Built-in versioning system allows you to rollback to any previous build instantly.',
    icon: Box,
  },
  {
    id: '6',
    title: 'Fair Economy',
    description: 'We take only 5%. Creators keep 95% of their hard-earned revenue.',
    icon: Coins,
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Twitter', url: 'https://x.com/owneraniex', icon: Twitter },
  { platform: 'GitHub', url: 'https://github.com/owneraniex', icon: Github },
];

// Fixed Launch Date: Feb 22, 2026 (14 days from Feb 8, 2026)
// This ensures the timer counts down to a specific moment and doesn't reset on refresh.
export const LAUNCH_DATE = "2026-02-22T00:00:00";