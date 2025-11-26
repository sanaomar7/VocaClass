import Section from '../ui/Section.jsx';
import "../../styles/team.css";

const team = [
  { name: 'Ahmad Farhan', role: 'CEO', image: '/assets/team/ahmad.png' },
  { name: 'Mahmoud Hanan', role: 'Co-founder & CTO', image: '/assets/team/akhrirer.png' },
  { name: 'Mohammed Osseir', role: 'Co-founder & Senior Developer', image: '/assets/team/osseir.png' },
  { name: 'Mohamed Ossait', role: 'Co-founder & CBO', image: '/assets/team/ossait.png' },
  { name: 'Hassan Akhrier', role: 'Co-founder & Senior Designer', image: '/assets/team/akhrirer.png' },
];


const TeamSection = () => {
  return (
    <Section id="team">

      <div className="team-wrapper">
        <div className="team-left">
          <p className="section-eyebrow">Leadership Team</p>
          <h2 className="section-title section-title--handwritten">
            The Minds Behind Kideo.
          </h2>
          <p className="section-lead">
            Our leadership team combines expertise, innovation, and a passion
            for playful learning — shaping the future of education for young
            learners everywhere.
          </p>
        </div>

        <div className="team-right">
  {team.map((member, idx) => (
    <div key={member.name} className="team-card">
      <img src={member.image} className="team-avatar" alt={member.name} />

      <div className="team-text">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </div>
  ))}
</div>
      </div>

    </Section>
  );
};

export default TeamSection;
