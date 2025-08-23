import { useState } from 'react';

type Bullet = { text: string; href?: string };

type Entry = { title: string; period?: string; bullets: Bullet[] };

type Group = { id: string; title: string; period?: string; entries: Entry[] };

// Merged content from legacy resume-timeline + new items
const groups: Group[] = [
  {
    id: 'engineering',
    title: 'Software Engineering',
    period: '2022 – Present',
    entries: [
      {
        title: 'Devomart Inmobiliaria — Backend Engineer (Barcelona)',
        period: '2024 – Present',
        bullets: [
          { text: 'Creating Google Apps Scripts to streamline company flows.' },
          { text: 'Automations to improve property management efficiency and quality.' },
          { text: 'Active participation in team meetings and technical discussions.' },
        ],
      },
      {
        title: 'Real Estate Management Platform',
        period: '2025 – Present',
bullets: [
          { text: 'Multi‑tenant system with role‑based access, income/cost tracking, and analytics.' },
          { text: 'Tech: TypeScript, NestJS, Next.js, PostgreSQL. In progress under senior mentorship.' },
        ],
      },
      {
        title: 'Python/Flask Real Estate App',
        period: '2024',
bullets: [
          { text: 'Independent project integrating database management, REST APIs, and deployment.' },
          { text: 'Tech: Python, Flask, SQL.' },
        ],
      },
      {
        title: 'CS50 Coursework',
        period: '2024',
bullets: [
          { text: 'C, Python, SQL — spell checker (hash tables), trading simulator, finance app.' },
        ],
      },
      {
        title: 'FreeCodeCamp Coursework',
        period: '2022',
bullets: [
          { text: 'JavaScript, CSS, HTML, Python' },
        ],
      }
    ],
  },
  

{
  id: 'basketball',
  title: 'Professional Basketball (France, Spain, Netherlands, Romania)',
  period: '2019 – 2025',
  entries: [
    {
      title: 'C.B. Prat (Segunda FEB)',
      period: '2024 – 2025',
      bullets: [
        { text: 'Pts: 11.8 | Reb: 4.4 | Ast: 0.8 | PER: 15.7' },
        { text: 'Returned to a leading role, providing consistent scoring and rebounding.' },
      ],
    },
    {
      title: 'FC Cartagena (Primera FEB)',
      period: '2024 – 2025',
      bullets: [
        { text: 'Pts: 8.0 | Reb: 3.2 | Ast: 0.5 | PER: 13.9' },
        { text: 'Contributed in Spain’s highly competitive Primera FEB.' },
      ],
    },
    {
      title: 'Laguna Sharks Bucuresti (Romania Divizia A)',
      period: '2023 – 2024',
      bullets: [
        { text: 'Pts: 15.3 | Reb: 7.4 | Ast: 1.4 | PER: 14.9' },
        { text: 'First season in Romania; central piece of the roster with standout performances.' },
      ],
    },
    {
      title: 'C.B. Prat (Segunda FEB)',
      period: '2022 – 2023',
      bullets: [
        { text: 'Pts: 11.2 | Reb: 5.5 | Ast: 0.9 | PER: 22.3' },
        { text: 'Highlight: Key contributor in the team’s promotion to Primera FEB.' },
      ],
    },
    {
      title: 'Hestia Menorca (LEB Oro, Spain)',
      period: '2021 – 2022',
      bullets: [
        { text: 'Pts: 9.5 | Reb: 7.1 | Ast: 1.0 | PER: 12.0' },
        { text: 'High responsibilities on an ambitious team seeking promotion.' },
      ],
    },
    {
      title: 'Union Tours Basket Metropole (NM1, France)',
      period: '2020 – 2021',
      bullets: [
        { text: 'Pts: 6.3 | Reb: 3.0 | Ast: 0.8 | PER: 11.4' },
        { text: 'Joined mid-season; contributed to winning the league and earning promotion.' },
      ],
    },
    {
      title: 'Aris Leeuwarden (Netherlands)',
      period: '2020',
      bullets: [
        { text: 'Pts: 18.0 | Reb: 13.0 | Ast: 4.0 | PER: 30.0' },
        { text: 'High responsibilities in a smaller league; season interrupted due to COVID-19.' },
      ],
    },
    {
      title: 'ESSM Le Portel (Jeep Elite, France)',
      period: '2019 – 2020',
      bullets: [
        { text: 'Pts: 2.3 | Reb: 1.8 | Ast: 0.4 | PER: 5.0' },
        { text: 'First professional year at a high level; substantial growth and learning.' },
      ],
    },
  ],
}

,
  {
    id: 'utc',
    title: 'University of Tennessee Chattanooga',
    period: '2018 – 2019',
    entries: [
      {
        title: 'Masters of Public Administration',
        period: '2018 – 2019',
bullets: [
          { text: 'Completed the 2‑year program in 1 year with a 4.0 institutional GPA.' },
          { text: 'Capstone project: “Hellbender Conservation Program” (with Chattanooga Zoo).', href: '/resume/Hellbender%20Conservation%20Program%20-%20MPA%20Capstone%20project%202019.pdf' },
        ],
      },
      {
        title: 'Chattanooga Zoo Internship (Marketing \u0026 Communications)',
        period: 'Jun 2018 – Aug 2018',
bullets: [
          { text: '300‑hour internship: press releases, event flyers, events organization, educational materials.' },
          { text: 'Exposure to finance, organizational, and educational departments.' },
        ],
      },
    ],
  },
  {
    id: 'uab',
    title: 'University of Alabama at Birmingham',
    period: '2015 – 2018',
    entries: [
      {
        title: 'Graduate Work (Communications)',
        period: '2017 – 2018',
        bullets: [
          { text: 'Completed 18 credit hours; 4.0 institutional GPA.' },
          { text: 'Transitioned after first graduate year for basketball.' },
        ],
      },
      {
        title: 'B.A. Communication Studies (Honors)',
        period: '2015 – 2017',
        bullets: [
          { text: 'Graduated with honors (3.94 GPA).' },
          { text: 'Student‑athlete with Men’s Basketball team.' },
        ],
      },
      {
        title: 'Volunteering',
        period: '2015 – 2018',
        bullets: [
          { text: '100+ hours at Children’s Hospital (Birmingham).' },
          { text: 'Community interventions with Men’s Basketball team; Serve Day (twice).' },
        ],
      },
    ],
  },
];

export default function Timeline() {
  const [open, setOpen] = useState<{ [key: string]: number | null }>({});

  return (
    <div className="timeline-groups">
      {groups.map((g) => {
        const openIndex = open[g.id] ?? 0;
        const iconSrc = g.id === 'engineering'
          ? '/resume/briefcase-solid.svg'
          : g.id === 'basketball'
          ? '/resume/basketball-ball-solid.svg'
          : '/resume/graduation-cap-solid.svg';
        const iconAlt = g.id === 'engineering' ? 'Work' : g.id === 'basketball' ? 'Basketball' : 'Education';
        return (
          <section key={g.id} className="timeline-group section">
            <h3 className="group-title">
              <span className="group-icon-wrap"><img className="group-icon" src={iconSrc} alt={iconAlt} width={14} height={14} /></span>
              {g.title} {g.period ? <span className="period">({g.period})</span> : null}
            </h3>
            <ol className="timeline">
              {g.entries.map((e, i) => {
                const id = `${g.id}-${i}`;
                const expanded = openIndex === i;
                return (
                  <li key={id} className={`timeline-item ${expanded ? 'open' : ''}`}>
                    <button
                      className="timeline-head"
                      aria-controls={`${id}-body`}
                      aria-expanded={expanded}
                      onClick={() => setOpen({ ...open, [g.id]: expanded ? null : i })}
                    >
                      <span className="dot" />
                      <span className="t-headings">
                        <strong>{e.title}</strong>
                        {e.period && <small className="period">{e.period}</small>}
                      </span>
                      <span className="chev">{expanded ? '▾' : '▸'}</span>
                    </button>
                    <div id={`${id}-body`} className="timeline-body" aria-hidden={!expanded}>
                      <ul>
{e.bullets.map((b, j) => (
                          <li key={j}>
                            {b.href ? (
                              <a className="capstone-link" href={b.href} target="_blank" rel="noopener">
                                {b.text}
                              </a>
                            ) : (
                              b.text
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
