import { Github, Linkedin, Mail, MessageCircle, MapPin } from 'lucide-react'
import { config } from '@/lib/config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: `https://github.com/${config.personal.github}`, icon: Github },
    { name: 'Email', href: `mailto:${config.personal.email}`, icon: Mail },
    { name: 'Website', href: `https://${config.personal.website}`, icon: Mail },
  ]

  const contactInfo = [
    { icon: MessageCircle, text: config.personal.discord },
    { icon: MapPin, text: config.personal.location },
    { icon: Mail, text: config.personal.email },
  ]

  return (
    <footer className="bg-dark-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">{config.personal.name}</h3>
            <p className="text-gray-300">
              {config.personal.title} passionate about creating 
              innovative digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Experience</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon size={18} className="text-primary-400" />
                  <span className="text-gray-300">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {config.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
