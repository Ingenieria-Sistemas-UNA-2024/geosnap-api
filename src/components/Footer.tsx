import Link from "next/link"
import { Instagram, Facebook, Linkedin, Github, Phone, Mail, MapPin } from "lucide-react"

export default function Component() {
  return (
    <footer className="bg-[#30363d] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-center">Contáctanos</h4>
            <div className="space-y-2 text-center">
              <p>
                <Phone className="w-5 h-5 inline-block mr-2" />
                +506 1234 5678
              </p>
              <p>
                <Mail className="w-5 h-5 inline-block mr-2" />
                info@GeoSnap.com
              </p>
              <p>
                <MapPin className="w-5 h-5 inline-block mr-2" />
                San Isidro del General, Pérez Zeledón
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="space-y-4 text-center">
            <h4 className="text-lg font-semibold">Síguenos</h4>
            <div className="flex justify-center space-x-4">
              <Link href="https://www.facebook.com/unacostarica/" className="text-[#693CA5] hover:text-[#a58ac9] transition-colors" prefetch={false}>
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/una.ac.cr/" className="text-[#693CA5] hover:text-[#a58ac9] transition-colors" prefetch={false}>
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://github.com/Ingenieria-Sistemas-UNA-2024/" className="text-[#693CA5] hover:text-[#a58ac9] transition-colors" prefetch={false}>
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/school/universidad-nacional/" className="text-[#693CA5] hover:text-[#a58ac9] transition-colors" prefetch={false}>
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="space-y-4 text-center">
            <h4 className="text-lg font-semibold">Derechos de autor</h4>
            <p>&copy; 2024 Geo-Snap</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
