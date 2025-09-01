<template>
  <main>
    <SEO 
      title="Our Team - NexTash"
      description="Meet our talented team of developers, designers, and digital experts who are passionate about creating innovative solutions."
      keywords="team, developers, designers, digital experts, NexTash team"
    />
    
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="boxed">
        <div class="hero-content">
          <b class="section-badge">Team</b>
          <h1 class="hero-title">Meet Our Team</h1>
          <p class="hero-description">
            We're a diverse team of passionate professionals dedicated to delivering exceptional digital solutions. 
            Our expertise spans across various technologies and industries.
          </p>
        </div>
      </div>
    </section>

    <!-- TEAM GRID -->
    <section class="team-section">
      <div class="boxed">
        <div class="team-grid">
          <TeamMemberCard
            v-for="member in teamMembers"
            :key="member.id"
            :id="member.id"
            :name="member.name"
            :position="member.position"
            :description="member.description"
            :image="member.image"
            :skills="member.skills"
            :linkedin="member.linkedin"
            :twitter="member.twitter"
            :github="member.github"
            :email="member.email"
            :variant="member.variant"
          />
        </div>
      </div>
    </section>

    <!-- VALUES SECTION -->
    <section class="values-section">
      <div class="boxed">
        <div class="section-header">
          <h2>Our Values</h2>
          <p>The principles that guide our work and relationships</p>
        </div>
        
        <div class="values-grid">
          <div class="value-item" data-aos="fade-up" data-aos-duration="1000">
            <div class="value-icon">
              <i class="bx bx-target-lock"></i>
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from code quality to client communication.</p>
          </div>
          
          <div class="value-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="value-icon">
              <i class="bx bx-lightbulb"></i>
            </div>
            <h3>Innovation</h3>
            <p>We embrace new technologies and creative solutions to solve complex problems.</p>
          </div>
          
          <div class="value-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div class="value-icon">
              <i class="bx bx-group"></i>
            </div>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and open communication to achieve great results.</p>
          </div>
          
          <div class="value-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="value-icon">
              <i class="bx bx-heart"></i>
            </div>
            <h3>Passion</h3>
            <p>We're passionate about technology and committed to helping our clients succeed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta-section">
      <div class="boxed">
        <div class="cta-content">
          <h2>Join Our Team</h2>
          <p>We're always looking for talented individuals who share our passion for technology and innovation.</p>
          <router-link to="/careers" class="btn-primary">View Open Positions</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SEO from '@/components/SEO.vue'
import TeamMemberCard from '@/components/TeamMemberCard.vue'

export default {
  name: 'Team',
  components: {
    SEO,
    TeamMemberCard
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Ahmed Hassan',
          position: 'CEO & Founder',
          description: 'Visionary leader with over 10 years of experience in digital transformation and business strategy.',
          image: '/src/assets/images/team/1.webp',
          skills: ['Leadership', 'Strategy', 'Business Development'],
          linkedin: 'https://linkedin.com/in/ahmed-hassan',
          twitter: 'https://twitter.com/ahmed_hassan',
          github: '',
          email: 'ahmed@nextash.com',
          variant: 'featured'
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          position: 'Lead Developer',
          description: 'Full-stack developer specializing in modern web technologies and scalable architecture.',
          image: '/src/assets/images/team/2.webp',
          skills: ['Vue.js', 'Node.js', 'Python', 'AWS'],
          linkedin: 'https://linkedin.com/in/sarah-johnson',
          twitter: 'https://twitter.com/sarah_dev',
          github: 'https://github.com/sarahjohnson',
          email: 'sarah@nextash.com',
          variant: 'default'
        },
        {
          id: 3,
          name: 'Michael Chen',
          position: 'UI/UX Designer',
          description: 'Creative designer focused on creating intuitive and beautiful user experiences.',
          image: '/src/assets/images/team/3.webp',
          skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
          linkedin: 'https://linkedin.com/in/michael-chen',
          twitter: '',
          github: '',
          email: 'michael@nextash.com',
          variant: 'default'
        },
        {
          id: 4,
          name: 'Emily Rodriguez',
          position: 'Mobile Developer',
          description: 'Expert in cross-platform mobile development with a focus on performance and user experience.',
          image: '/src/assets/images/team/4.webp',
          skills: ['React Native', 'Flutter', 'iOS', 'Android'],
          linkedin: 'https://linkedin.com/in/emily-rodriguez',
          twitter: 'https://twitter.com/emily_mobile',
          github: 'https://github.com/emilyrodriguez',
          email: 'emily@nextash.com',
          variant: 'default'
        },
        {
          id: 5,
          name: 'David Kim',
          position: 'DevOps Engineer',
          description: 'Infrastructure specialist focused on automation, scalability, and security.',
          image: '/src/assets/images/team/5.webp',
          skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
          linkedin: 'https://linkedin.com/in/david-kim',
          twitter: '',
          github: 'https://github.com/davidkim',
          email: 'david@nextash.com',
          variant: 'default'
        },
        {
          id: 6,
          name: 'Lisa Wang',
          position: 'Digital Marketing Specialist',
          description: 'Marketing expert with deep knowledge of digital strategies and growth optimization.',
          image: '/src/assets/images/team/6.webp',
          skills: ['SEO', 'SEM', 'Social Media', 'Analytics'],
          linkedin: 'https://linkedin.com/in/lisa-wang',
          twitter: 'https://twitter.com/lisa_marketing',
          github: '',
          email: 'lisa@nextash.com',
          variant: 'default'
        }
      ]
    }
  }
}
</script>
