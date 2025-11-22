import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";

export default function About() {
    function resumeText() {
        return (
            <>
                <p><span style={{ color: "#00ff9f" }}>summary $</span> cat resume</p>
                <p>
                    <strong>SUMMARY</strong><br />
                    Annuh Liwan Nahar<br />
                    annuhliwan@gmail.com | +6285645319548<br />
                    https://www.linkedin.com/in/annuh-liwan/<br /><br />
                    I’m a Full-Stack Developer with 6+ years of hands-on experience in building scalable web and
                    mobile applications. Proficient in Laravel, Flutter, PHP, Node.js, Python, TypeScript, React,
                    Nuxt with strong frontend & backend capabilities. Experienced in RESTful APIs, responsive UI,
                    relational & NoSQL databases, and writing maintainable code in agile teams.
                </p>

                <br />
                <p><strong>EXPERIENCES</strong></p>

                <p>
                    <strong>Front-End Developer</strong><br />
                    Kemang Internet Pte. Ltd. — Jun 2025 – Oct 2025<br />
                    - Built web applications using Nuxt & Vue.<br />
                    - Styled UI using Tailwind CSS.<br />
                    - Managed complex REST API operations with PostgreSQL.
                </p>

                <p>
                    <strong>WordPress Developer</strong><br />
                    S-FX.com Small Business Solutions, LLC — Mei 2025 – Jun 2025<br />
                    - Developed apps with WordPress (PHP).<br />
                    - Used Bootstrap & Tailwind CSS.<br />
                    - Customized layouts using Bricks & ACF Pro.
                </p>

                <p>
                    <strong>Flutter Developer</strong><br />
                    Codingo Assignments Pte. Ltd. — Feb 2025 – Jun 2025<br />
                    - Built apps using Flutter.<br />
                    - Built apps in React Native.<br />
                    - Built apps using Android Studio (Java/Kotlin).
                </p>

                <p>
                    <strong>Full-Stack Developer</strong><br />
                    PT. Koding Dev Nusantara — Jan 2024 – Apr 2024<br />
                    - Adonis.js backend, Inertia.js + Vue/React frontend.<br />
                    - Mobile dev with Flutter & Android Studio.<br />
                    - Styled with Bootstrap/Tailwind.<br />
                    - Worked with PostgreSQL, MySQL, MariaDB, MongoDB.
                </p>

                <p>
                    <strong>IT Support Engineer</strong><br />
                    Universitas Dinamika — Oct 2006 – Dec 2023<br />
                    - End-user support for web & desktop apps.<br />
                    - Managed Ubuntu, Nginx, VM servers.<br />
                    - Worked with PL/SQL, MySQL, Oracle.
                </p>

                <p>
                    <strong>Full-Stack Developer</strong><br />
                    Produksiweb — Nov 2016 – Dec 2022<br />
                    - Node.js, Express.js, Laravel, CodeIgniter, Python.<br />
                    - Vue.js, React.js, Bootstrap, Tailwind CSS.<br />
                    - Mobile apps using Flutter & Kotlin.<br />
                    - Firebase + SQL integration.
                </p>

                <p>
                    <strong>Web Developer</strong><br />
                    Gudang Website — Mar 2011 – Oct 2016<br />
                    - CI & Native PHP.<br />
                    - HTML, Material CSS, Bootstrap UI.
                </p>

                <br />
                <p><strong>EDUCATION</strong></p>
                <p>
                    Universitas Wijaya Kusuma Surabaya<br />
                    Bachelor’s in Library & Information Science<br />
                    Sept 2012 – Feb 2016 (CGPA 3.75)
                </p>

                <br />
                <p><strong>TECHNICAL SKILLS</strong></p>
                <ul>
                    <li>PHP, Laravel, CodeIgniter, Node.js, Express.js, Adonis.js</li>
                    <li>TypeScript, Python, Flutter, Vue.js, React.js</li>
                    <li>Frontend: React, Vue, Nuxt, HTML, CSS, Bootstrap, Tailwind, Inertia.js</li>
                    <li>Databases: MySQL, PostgreSQL, MariaDB, MongoDB, Firebase, Oracle</li>
                    <li>Tools: VSCode, Android Studio, Figma, Adobe XD</li>
                    <li>Others: REST APIs, Git, Ubuntu Server, Nginx</li>
                </ul>

                <br />
                <p><strong>SOFT SKILLS</strong></p>
                <ul>
                    <li>Adaptability & Continuous Learning</li>
                    <li>Strong Problem-Solving</li>
                    <li>Communication & Collaboration</li>
                    <li>Creativity & Innovation</li>
                </ul>

                <br />
                <p><strong>LANGUAGES</strong></p>
                <ul>
                    <li>Indonesian (Native)</li>
                    <li>English (Professional Working Proficiency)</li>
                </ul>
            </>
        );
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={resumeText()} />
        </Box>
    );
}
