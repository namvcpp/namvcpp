<div className="max-w-4xl mx-auto">
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4">Van Cong Nam</h1>
    <div className="text-xl text-gray-600 dark:text-gray-300">
      A passionate software developer with a strong background in computer science and a keen interest in creating innovative solutions.
    </div>
    
    <div className="flex justify-center mt-4 space-x-4">
      <ContactCard
        icon="📍"
        title="Location"
        value="Da Nang, Viet Nam"
      />
      <ContactCard
        icon="📧"
        title="Email"
        value="namvc153@gmail.com"
        link="mailto:namvc153@gmail.com"
      />
      <ContactCard
        icon="🌐"
        title="Website"
        value="namvcpp.github.io"
        link="https://namvcpp.github.io/"
      />
    </div>
  </div>

  <Section title="About Me">
    <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
      I am currently a student at Le Quy Don High School for the Gifted in Da Nang, Viet Nam, specializing in Information Technology. 
      I have a strong foundation in programming and have participated in various competitions and projects that showcase my skills and dedication.
    </div>
  </Section>

  <Section title="Education">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Le Quy Don High School for the Gifted, Da Nang, Viet Nam</h3>
      <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">September 2023 – Present</div>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li className="text-gray-600 dark:text-gray-300">GPA: 3.6</li>
        <li className="text-gray-600 dark:text-gray-300">Specialization: Information Technology</li>
      </ul>
    </div>
  </Section>

  <Section title="Skills">
    <h3 className="text-lg font-semibold mb-3">Programming Languages</h3>
    <div className="flex flex-wrap gap-2 mb-6">
      <SkillBadge name="C++" level="advanced" />
      <SkillBadge name="Python" level="advanced" />
      <SkillBadge name="GDScript" level="intermediate" />
      <SkillBadge name="TypeScript" level="intermediate" />
      <SkillBadge name="JavaScript" level="intermediate" />
      <SkillBadge name="HTML" level="intermediate" />
      <SkillBadge name="CSS" level="intermediate" />
    </div>
    
    <h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3>
    <div className="flex flex-wrap gap-2">
      <SkillBadge name="Git" level="intermediate" />
      <SkillBadge name="Godot" level="intermediate" />
      <SkillBadge name="Next.js" level="intermediate" />
      <SkillBadge name="React" level="intermediate" />
      <SkillBadge name="Pygame" level="intermediate" />
      <SkillBadge name="Tkinter" level="intermediate" />
      <SkillBadge name="Firebase" level="intermediate" />
      <SkillBadge name="Arduino" level="intermediate" />
      <SkillBadge name="ESP32" level="intermediate" />
    </div>
  </Section>

  <Section title="Experience & Leadership">
    <ExperienceCard
      title="Technical Leader"
      company="U-Invent Vietnam Season 7"
      period="2025"
      description={[
        "Led the technical development team of a landslide detection and warning system.",
        "Designed and implemented core algorithms for sensor data processing and real-time risk assessment.",
        "Managed a cross-functional team, coordinating tasks across hardware, software, and research domains."
      ]}
      skills={["IoT", "ESP32", "Arduino", "Python", "Next.js", "React", "TypeScript", "Firebase"]}
    />
    
    <ExperienceCard
      title="Project Lead"
      company="Linguist Reader Development"
      period="2024"
      description={[
        "Led the development of a feature-rich eBook reader with AI-powered translation, annotation, and progress tracking.",
        "Worked in a 2-member team, handling both backend and frontend."
      ]}
      skills={["AI", "Frontend", "Backend"]}
    />
    
    <ExperienceCard
      title="Volunteer"
      company="Charity Trip to Quang Nam"
      period="2023"
      description={[
        "Participated in a charity initiative, providing essential supplies to underprivileged communities in Quang Nam.",
        "Engaged with local residents, helping distribute donations and assisting in community activities.",
        "Contributed to fundraising efforts, ensuring sustainable aid for those in need."
      ]}
    />
  </Section>

  <Section title="Awards & Achievements">
    <ProjectCard
      title="Google Developer Student Club Hackathon - 2nd Prize"
      description="Developed 'Elderly HealthCare,' an IoT-based fall detection system using computer vision to detect falls in elderly individuals and alert caregivers in real-time."
      technologies={["Python", "Arduino", "YOLO", "OpenCV", "TensorFlow", "DeepFace", "MediaPipe"]}
    />
    
    <ProjectCard
      title="U-Invent Vietnam Season 7 - 1st Prize"
      description="Designed and developed a landslide detection and early warning system combining IoT sensors and a web-based real-time alerting platform."
      technologies={["Python", "TypeScript", "Arduino", "ESP32", "Firebase", "React", "Next.js"]}
    />
    
    <ProjectCard
      title="Youth On! Hackathon 2023 - 1st Prize"
      description="Built an AI-powered fall detection system using computer vision."
      technologies={["OpenCV", "TensorFlow", "Python", "Arduino"]}
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h4 className="font-bold mb-2">Bebras Competition - High Distinction (2023)</h4>
        <div className="text-sm text-gray-600 dark:text-gray-300">Earned gold medal in this international computational thinking competition.</div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h4 className="font-bold mb-2">American Math Olympiad - Bronze Medal (2023)</h4>
        <div className="text-sm text-gray-600 dark:text-gray-300">Achieved bronze in this international mathematics competition.</div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h4 className="font-bold mb-2">Olympic Tin học Miền Trung & Tây Nguyên - Bronze Medal (2023)</h4>
        <div className="text-sm text-gray-600 dark:text-gray-300">Awarded bronze in this prestigious regional programming competition.</div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h4 className="font-bold mb-2">Provincial Informatics Competition - 1st Prize (2023)</h4>
        <div className="text-sm text-gray-600 dark:text-gray-300">Won top prize in Da Nang city-level programming competition.</div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h4 className="font-bold mb-2">Provincial Mathematics Competition - 2nd Prize (2023)</h4>
        <div className="text-sm text-gray-600 dark:text-gray-300">Secured second place in Da Nang provincial mathematics competition.</div>
      </div>
    </div>
  </Section>

  <Section title="Projects">
    <ProjectCard
      title="Elderly HealthCare"
      description="An IoT-based fall detection system using computer vision to detect falls in elderly individuals and alert caregivers in real-time."
      technologies={["Python", "Arduino", "YOLO", "OpenCV", "TensorFlow", "DeepFace", "MediaPipe"]}
    />
    
    <ProjectCard
      title="Landslide Detection System"
      description="An early warning system combining IoT sensors and a web-based real-time alerting platform to predict and notify about potential landslides."
      technologies={["Python", "TypeScript", "Arduino", "ESP32", "Firebase", "React", "Next.js"]}
    />
    
    <ProjectCard
      title="Linguist Reader"
      description="A feature-rich eBook reader with AI-powered translation, annotation capabilities, and reading progress tracking."
      technologies={["Next.js", "React", "TypeScript", "AI Translation APIs"]}
    />
  </Section>

  <Section title="Certifications">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">IELTS - Academic (Computer-Based)</h3>
      <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">2025</div>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        <li className="text-gray-600 dark:text-gray-300">Overall Score: Band 7.0</li>
      </ul>
    </div>
  </Section>

  <Section title="Contact">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ContactCard
        icon="📱"
        title="Phone"
        value="+84 916 142 877"
        link="tel:+84-916-142-877"
      />
      
      <ContactCard
        icon="💼"
        title="LinkedIn"
        value="Nam Van"
        link="https://www.linkedin.com/in/nam-van-b33752347/"
      />
      
      <ContactCard
        icon="💻"
        title="GitHub"
        value="namvcpp"
        link="https://github.com/namvcpp"
      />
      
      <ContactCard
        icon="📧"
        title="Email"
        value="namvc153@gmail.com"
        link="mailto:namvc153@gmail.com"
      />
      
      <ContactCard
        icon="🌐"
        title="Website"
        value="namvcpp.github.io"
        link="https://namvcpp.github.io/"
      />
    </div>
  </Section>
</div>