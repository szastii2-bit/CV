import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Gamepad2,
  GraduationCap,
  Award,
  Code,
  User,
} from 'lucide-react';

const cvData = {
  personalInfo: {
    name: 'Daniel Szastak',
    title: 'Technik Programista',
    about:
      'Jestem pasjonatem programowania, obecnie uczniem 5. klasy technikum na kierunku Technik Programista. Skupiam się na technologiach webowych (HTML, CSS, JS, React). Dzięki ukończonemu kursowi wychowawcy wypoczynku posiadam wysoko rozwinięte umiejętności komunikacyjne, poczucie odpowiedzialności oraz potrafię świetnie pracować w zespole. Szukam możliwości zdobycia pierwszego doświadczenia zawodowego w branży IT.',
    email: 'szastii2@gmail.com',
    phone: '+48 123 456 789',
    location: 'Czeladź, Polska',
    github: 'https://github.com/szastii2-bit',
  },
  education: [
    {
      school: 'Zespół Szkół Technicznych',
      degree: 'Technik Programista',
      period: 'Wrzesień 2021 - Obecnie (5. klasa)',
      description:
        'Nauka programowania, baz danych, aplikacji webowych i mobilnych.',
    },
  ],
  skills: {
    hard: ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Git / GitHub'],
    soft: [
      'Praca w zespole',
      'Komunikatywność',
      'Odpowiedzialność',
      'Rozwiązywanie problemów',
      'Organizacja czasu',
    ],
  },
  certificates: [
    {
      title: 'Kurs Wychowawcy Wypoczynku',
      issuer: 'Uprawnienia Państwowe',
      year: '2026',
      description:
        'Organizacja czasu wolnego, praca w zespole, budowanie relacji, umiejętność szybkiego reagowania w sytuacjach stresowych i odpowiedzialność za grupę.',
    },
  ],
  projects: [
    {
      title: 'Gra Saper (Minesweeper)',
      tech: ['React', 'JavaScript', 'CSS3'],
      description:
        'Klasyczna gra Saper przeniesiona do przeglądarki. Projekt obejmuje pełną logikę odkrywania pól, flagowania bomb, licznik czasu oraz generator losowej planszy.',
    },
  ],
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Panel boczny */}
        <aside className="bg-gray-900 text-white p-6 flex flex-col justify-between">
          <div>
            {/* Zdjęcie profilowe */}
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 flex items-center justify-center bg-gray-800">
              <User className="w-16 h-16 text-gray-400" />
            </div>

            <h1 className="text-2xl font-bold text-center mb-1 text-white">
              {cvData.personalInfo.name}
            </h1>
            <p className="text-blue-400 text-sm text-center mb-6">
              {cvData.personalInfo.title}
            </p>

            {/* Dane kontaktowe */}
            <div className="space-y-3 text-sm border-t border-gray-800 pt-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate text-gray-200">
                  {cvData.personalInfo.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-gray-200">
                  {cvData.personalInfo.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-gray-200">
                  {cvData.personalInfo.location}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={cvData.personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-200 hover:underline truncate"
                >
                  GitHub Profil
                </a>
              </div>
            </div>

            {/* Umiejętności */}
            <div className="mt-8 border-t border-gray-800 pt-6">
              <h2 className="text-lg font-semibold mb-3 flex items-center text-white">
                <Code className="w-5 h-5 mr-2 text-blue-400" /> Umiejętności
              </h2>
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                  Techniczne
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cvData.skills.hard.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-blue-300 text-xs px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-2">
                  Miękkie
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cvData.skills.soft.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 text-xs px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Treść główna */}
        <main className="md:col-span-2 p-6 md:p-8 space-y-6 bg-white">
          {/* O mnie */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-500" /> O mnie
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {cvData.personalInfo.about}
            </p>
          </section>

          {/* Edukacja */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-500" /> Edukacja
            </h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                  <span className="text-xs text-gray-500">{edu.period}</span>
                </div>
                <p className="text-sm text-blue-600 font-medium">
                  {edu.school}
                </p>
                <p className="text-xs text-gray-600 mt-1">{edu.description}</p>
              </div>
            ))}
          </section>

          {/* Certyfikaty / Doświadczenie */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-3 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-500" /> Certyfikaty i
              Uprawnienia
            </h2>
            {cvData.certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 p-3 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-800">{cert.title}</h3>
                  <span className="text-xs text-gray-500">{cert.year}</span>
                </div>
                <p className="text-xs text-gray-500 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-600">{cert.description}</p>
              </div>
            ))}
          </section>

          {/* Ostatni Projekt - Saper */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-1 mb-4 flex items-center">
              <Gamepad2 className="w-5 h-5 mr-2 text-blue-500" /> Ostatni
              Projekt: Saper
            </h2>

            {cvData.projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-50"
              >
                {/* Podgląd planszy Saper */}
                <div className="relative bg-gray-800 p-4 flex flex-col items-center justify-center min-h-[160px] text-white">
                  <p className="text-xs text-gray-400 mb-2">
                    Podgląd projektu Saper:
                  </p>

                  <div className="grid grid-cols-5 gap-1 p-2 bg-gray-700 rounded">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gray-500 rounded-sm flex items-center justify-center text-xs font-bold text-gray-200"
                      >
                        {i === 7 ? '💣' : i === 12 ? '🚩' : i === 3 ? '1' : ''}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">{project.title}</h3>
                    <div className="flex gap-1">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
