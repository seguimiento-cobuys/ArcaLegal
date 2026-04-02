// ARCA LEGAL — Premium Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {

    // ── 0. Language Switching ─────────────────────────────────
    const langToggle = document.getElementById('langToggle');
    const langSpans = langToggle.querySelectorAll('span');
    let currentLang = localStorage.getItem('arca_lang') || 'es';

    const translations = {
        'es': {
            'nav_inicio': 'INICIO',
            'nav_nosotros': 'QUIÉNES SOMOS',
            'nav_servicios': 'ÁREAS DE PRÁCTICA',
            'nav_equipo': 'EQUIPO',
            'nav_testimonios': 'TESTIMONIOS',
            'nav_contacto': 'CONTACTO',
            'btn_consulta': 'CONSULTA',
            'hero_title': 'Escogernos es la primera decisión hacia el éxito',
            'hero_subtitle': 'La realidad jurídica es casuística, su resultado parte de su comprensión',
            'btn_servicios': 'NUESTROS SERVICIOS',
            'btn_contactar': 'CONTACTAR AHORA',
            'stat_exp': 'Años de Experiencia',
            'stat_cases': 'Casos Ganados',
            'stat_clients': 'Clientes Satisfechos',
            'stat_avail': 'Atención Disponible',
            'tag_about': 'QUIÉNES SOMOS',
            'about_heading': 'EXPERIENCIA Y EXCELENCIA JURÍDICA',
            'about_p1': 'ARCA LEGAL es una firma de abogados de primer nivel con sede en la Ciudad de Panamá, fundada por el abogado Alejandro Arias Garcés. Con más de 15 años de trayectoria, nuestro equipo combina experiencia en la Corte Suprema de Justicia, el Ministerio Público y el sector gubernamental para ofrecer un servicio jurídico diligente y de alta calidad en diversas ramas del derecho panameño.',
            'about_p2': 'Nuestra filosofía: "Escogernos es la primera decisión hacia el éxito." Combinamos conocimiento jurídico profundo con estrategias innovadoras y un trato personalizado que nos distingue en el mercado legal panameño.',
            'btn_team': 'CONOZCA NUESTRO EQUIPO',
            'tag_specialties': 'NUESTRAS ESPECIALIDADES',
            'practice_heading': 'ÁREAS DE PRÁCTICA',
            'svc_admin_title': 'DERECHO ADMINISTRATIVO',
            'svc_admin_desc': 'Procesos contencioso-administrativos, asesoría gubernamental y defensa ante entidades del Estado.',
            'svc_penal_title': 'DERECHO PENAL',
            'svc_penal_desc': 'Defensa penal estratégica con abogado penalista especializado y ex Fiscal Anticorrupción.',
            'svc_corp_title': 'DERECHO CORPORATIVO',
            'svc_corp_desc': 'Constitución de sociedades y asesoría corporativa y especializada.',
            'svc_familia_title': 'DERECHO DE FAMILIA',
            'svc_familia_desc': 'Divorcios, guarda y crianza, pensiones alimenticias y procesos de familia en general.',
            'svc_inmob_title': 'DERECHO INMOBILIARIO',
            'svc_inmob_desc': 'Compraventa de propiedades, arrendamientos y gestión de trámites ante el Registro Público.',
            'svc_laboral_title': 'DERECHO LABORAL',
            'svc_laboral_desc': 'Asesoría en contratos, despidos, liquidaciones y representación ante el MITRADEL.',
            'svc_migra_title': 'DERECHO MIGRATORIO',
            'svc_migra_desc': 'Trámites de residencia, permisos de trabajo y visas para extranjeros en Panamá.',
            'svc_protec_title': 'PROTECCIÓN PATRIMONIAL',
            'svc_protec_desc': 'Fundaciones de Interés Privado y estructuras legales para salvaguardar sus activos.',
            'svc_civil_title': 'DERECHO CIVIL',
            'svc_civil_desc': 'Contratos, sucesiones, demandas de daños y perjuicios y asesoría civil integral.',
            'tag_leadership': 'LIDERAZGO',
            'team_heading': 'NUESTRO EQUIPO LEGAL',
            'role_founder': 'Socio Fundador & Director',
            'role_partner': 'Socia Fundadora',
            'role_counsel': 'Abogado Penalista — Of Counsel',
            'bio_alejandro_1': 'Abogado graduado de la Universidad de Panamá (2007), con posgrado y maestría en Derecho Administrativo (Universidad Latina de Panamá, 2012) y posgrado en Docencia Superior (UDELAS, 2020). Cuenta con más de 15 años de experiencia, incluyendo 12 años en la Sala Tercera de lo Contencioso Administrativo de la Corte Suprema de Justicia (2008-2020) y 3 años como Jefe de Asesoría Legal en la Lotería Nacional de Beneficencia (2021-2024).',
            'bio_alejandro_2': 'Actualmente ejerce en práctica privada selectiva, con enfoque en derecho administrativo, corporativo y litigios. Participó en la Revista Cultural Lotería 545-546, Edición Especial (80 Años de Jurisdicción Contencioso-Administrativa, 2024).',
            'bio_deysi': 'Abogada con más de 30 años de experiencia en el sector gubernamental. Especialista en Derecho Administrativo, Migratorio, Agrario, Derecho Comercial/Corporativo y Contratación Pública. Cuenta con diplomados en Regulación del Sistema Bancario panameño y en Mediación y Conciliación (idoneidad, 2024). Participó en la Revista Cultural Lotería 545-546, Edición Especial (80 Años de Jurisdicción Contencioso-Administrativa, 2024).',
            'bio_omar': 'Especialista con más de diez (10) años de experiencia en materia penal, incluyendo su trayectoria en el Ministerio Público como Fiscal Anticorrupción. Su profundo conocimiento del sistema acusatorio penal panameño lo posiciona como un defensor de primer nivel en casos de alta complejidad.',
            'label_education': 'FORMACIÓN',
            'label_specialties': 'ESPECIALIDADES',
            'label_languages': 'Idiomas: Español e Inglés',
            'edu_ale_1': 'Postgrado en Docencia Superior — UDELAS (2020)',
            'edu_ale_2': 'Postgrado y Maestría en Derecho Administrativo — Universidad Latina (2012)',
            'edu_ale_3': 'Licenciatura en Derecho y Ciencias Políticas — Universidad de Panamá (2007)',
            'edu_dey_1': 'Maestría en Docencia Superior — En curso',
            'edu_dey_2': 'Licenciatura en Derecho — Universidad Columbus',
            'edu_dey_3': 'Licenciatura en Contabilidad — Univ. Nacional de Panamá',
            'edu_dey_4': 'Diplomado en Regulación del Sistema Bancario',
            'edu_dey_5': 'Diplomado en Mediación y Conciliación (Idoneidad, 2024)',
            'tag_testimonials': 'TESTIMONIOS',
            'testimonials_heading': 'LO QUE DICEN NUESTROS CLIENTES',
            'test_1_text': 'ARCA LEGAL atendió mi proceso de sucesión, obteniendo el resultado deseado.',
            'test_1_role': 'Empresaria',
            'test_2_text': 'Confié en ARCA LEGAL para la defensa de los intereses de nuestra empresa y los resultados fueron extraordinarios.',
            'test_2_role': 'Director de Logística',
            'test_3_text': 'Como inversionista extranjero, necesitaba un despacho con experiencia internacional. ARCA LEGAL me brindó una asesoría impecable.',
            'test_3_role': 'Inversionista Internacional',
            'tag_contact': 'CONTACTO',
            'contact_heading': 'INICIE SU CONSULTA',
            'contact_desc': 'Estamos listos para brindarle la asesoría legal que usted necesita. Complete el formulario y un especialista le contactará.',
            'form_name': 'Nombre completo',
            'form_email': 'Correo electrónico',
            'form_phone': 'Teléfono',
            'form_interest': 'Área de interés',
            'form_msg': 'Describa su consulta...',
            'form_submit': 'ENVIAR CONSULTA'
        },
        'en': {
            'nav_inicio': 'HOME',
            'nav_nosotros': 'ABOUT US',
            'nav_servicios': 'PRACTICE AREAS',
            'nav_equipo': 'OUR TEAM',
            'nav_testimonios': 'TESTIMONIALS',
            'nav_contacto': 'CONTACT',
            'btn_consulta': 'CONSULTATION',
            'hero_title': 'Choosing us is the first step toward success',
            'hero_subtitle': 'Legal reality is casuistic; its outcome stems from its understanding',
            'btn_servicios': 'OUR SERVICES',
            'btn_contactar': 'CONTACT NOW',
            'stat_exp': 'Years of Experience',
            'stat_cases': 'Won Cases',
            'stat_clients': 'Satisfied Clients',
            'stat_avail': 'Available Support',
            'tag_about': 'ABOUT US',
            'about_heading': 'EXPERIENCE AND LEGAL EXCELLENCE',
            'about_p1': 'ARCA LEGAL is a premier law firm based in Panama City, founded by the lawyer Alejandro Arias Garcés. With over 15 years of experience, our team combines expertise in the Supreme Court of Justice, the Public Prosecutor\'s Office, and the government sector to offer a diligent and high-quality legal service in various branches of Panamanian law.',
            'about_p2': 'Our philosophy: "Choosing us is the first decision toward success." We combine profound legal knowledge with innovative strategies and a personalized approach that distinguishes us in the Panamanian legal market.',
            'btn_team': 'MEET OUR TEAM',
            'tag_specialties': 'OUR SPECIALTIES',
            'practice_heading': 'PRACTICE AREAS',
            'svc_admin_title': 'ADMINISTRATIVE LAW',
            'svc_admin_desc': 'Contentious-administrative processes, government advice, and defense before State entities.',
            'svc_penal_title': 'CRIMINAL LAW',
            'svc_penal_desc': 'Strategic criminal defense with specialized criminal lawyers and former Anti-Corruption Prosecutor.',
            'svc_corp_title': 'CORPORATE LAW',
            'svc_corp_desc': 'Company incorporation and specialized corporate advisory.',
            'svc_familia_title': 'FAMILY LAW',
            'svc_familia_desc': 'Divorce, custody and upbringing, alimony, and general family law processes.',
            'svc_inmob_title': 'REAL ESTATE LAW',
            'svc_inmob_desc': 'Real estate transactions, leases, and management of procedures before the Public Registry.',
            'svc_laboral_title': 'LABOR LAW',
            'svc_laboral_desc': 'Advice on contracts, dismissals, settlements, and representation before MITRADEL.',
            'svc_migra_title': 'IMMIGRATION LAW',
            'svc_migra_desc': 'Residency procedures, work permits, and visas for foreigners in Panama.',
            'svc_protec_title': 'ASSET PROTECTION',
            'svc_protec_desc': 'Private Interest Foundations and legal structures to safeguard your assets.',
            'svc_civil_title': 'CIVIL LAW',
            'svc_civil_desc': 'Contracts, successions, damages claims, and comprehensive civil advisory.',
            'tag_leadership': 'LEADERSHIP',
            'team_heading': 'OUR LEGAL TEAM',
            'role_founder': 'Founding Partner & Director',
            'role_partner': 'Founding Partner',
            'role_counsel': 'Criminal Lawyer — Of Counsel',
            'bio_alejandro_1': 'Lawyer graduated from the University of Panama (2007), with a postgraduate degree and high master\'s in Administrative Law (Latina University of Panama, 2012) and a postgraduate degree in Higher Education (UDELAS, 2020). He has over 15 years of experience, including 12 years in the Third Administrative Contentious Chamber of the Supreme Court of Justice (2008-2020) and 3 years as Head of Legal Advisory at the National Lottery of Beneficence (2021-2024).',
            'bio_alejandro_2': 'He currently practices selectively in private practice, focusing on administrative and corporate law and litigation. He contributed to the Lotería Cultural Magazine 545-546, Special Edition (80 Years of Administrative Contentious Jurisdiction, 2024).',
            'bio_deysi': 'Lawyer with over 30 years of experience in the government sector. Specialist in Administrative, Immigration, Agrarian, Commercial/Corporate Law, and Public Procurement. She holds postgraduate diplomas in Panamanian Banking System Regulation and in Mediation and Conciliation (Professional License, 2024). She contributed to the Lotería Cultural Magazine 545-546, Special Edition (80 Years of Administrative Contentious Jurisdiction, 2024).',
            'bio_omar': 'Specialist with over ten (10) years of experience in criminal matters, including his tenure at the Public Ministry as an Anti-Corruption Prosecutor. His deep knowledge of the Panamanian accusatory criminal system positions him as a top-tier defender in high-complexity cases.',
            'label_education': 'EDUCATION',
            'label_specialties': 'SPECIALTIES',
            'label_languages': 'Languages: Spanish and English',
            'edu_ale_1': 'Postgraduate in Higher Education — UDELAS (2020)',
            'edu_ale_2': 'Postgraduate & Master\'s in Administrative Law — Latina Univ. (2012)',
            'edu_ale_3': 'Bachelor of Law and Political Science — University of Panama (2007)',
            'edu_dey_1': 'Master\'s in Higher Education — In progress',
            'edu_dey_2': 'Bachelor of Law — Columbus University',
            'edu_dey_3': 'Bachelor of Accounting — National Univ. of Panama',
            'edu_dey_4': 'Diploma in Banking System Regulation',
            'edu_dey_5': 'Diploma in Mediation and Conciliation (License, 2024)',
            'tag_testimonials': 'TESTIMONIALS',
            'testimonials_heading': 'WHAT OUR CLIENTS SAY',
            'test_1_text': 'ARCA LEGAL handled my succession process, achieving the desired outcome.',
            'test_1_role': 'Entrepreneur',
            'test_2_text': 'I trusted ARCA LEGAL to defend our company\'s interests and the results were extraordinary.',
            'test_2_role': 'Logistics Director',
            'test_3_text': 'As a foreign investor, I needed a firm with international experience. ARCA LEGAL provided impeccable advice.',
            'test_3_role': 'International Investor',
            'tag_contact': 'CONTACT',
            'contact_heading': 'START YOUR CONSULTATION',
            'contact_desc': 'We are ready to provide the legal advice you need. Fill out the form and a specialist will contact you shortly.',
            'form_name': 'Full name',
            'form_email': 'Email address',
            'form_phone': 'Phone number',
            'form_interest': 'Area of interest',
            'form_msg': 'Describe your query...',
            'form_submit': 'SEND QUERY'
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else if (el.tagName === 'SELECT') {
                    const firstOption = el.querySelector('option[disabled]');
                    if(firstOption && key === 'form_interest') {
                        firstOption.innerText = translations[lang][key];
                    }
                } else {
                    el.innerText = translations[lang][key];
                }
            }
        });

        // Update button states
        langSpans.forEach(span => {
            span.classList.toggle('active', span.innerText === lang.toUpperCase());
        });

        localStorage.setItem('arca_lang', lang);
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        updateLanguage(currentLang);
    });

    // Initialize Language
    updateLanguage(currentLang);

    // ── 1. Sticky Header ──────────────────────────────────────
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ── 2. Mobile Menu ────────────────────────────────────────
    const toggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (toggle) {
        toggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
        });
    }

    // Close mobile menu on link click
    if (mobileNav) {
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileNav.classList.remove('open'));
        });
    }

    // ── 3. Reveal Sections on Scroll ─────────────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ── 4. Smooth Scroll ──────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ── 5. Contact Form ───────────────────────────────────────
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = currentLang === 'es' ? 'ENVIANDO...' : 'SENDING...';
            btn.disabled = true;

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert(currentLang === 'es' ? 'Gracias por contactar a ARCA LEGAL. Su mensaje ha sido enviado correctamente.' : 'Thank you for contacting ARCA LEGAL. Your message has been sent successfully.');
                    form.reset();
                } else {
                    alert(currentLang === 'es' ? 'Hubo un problema al enviar su mensaje. Por favor, intente nuevamente.' : 'There was a problem sending your message. Please try again.');
                }
            } catch (error) {
                alert(currentLang === 'es' ? 'Error de conexión. Inténtelo más tarde.' : 'Connection error. Please try again later.');
            } finally {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        });
    }

});
