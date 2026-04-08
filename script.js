// ── CONFIGURAÇÃO DE TRADUÇÃO (Sua lógica original) ──
const T = {
    pt: {
      name: "Bernardo Fensterseifer",
      role: "Desenvolvedor iOS",
      location: "Porto Alegre, Brasil",
      all: "Todos",
      ios: "iOS",
      design: "Design",
      process_title: "Processo & Tecnologias",
      tech_ios: "Desenvolvimento iOS",
      tech_design: "Design de Produto",
      shiro_desc: "Projeto desenvolvido em equipe focado em acessibilidade e minimalismo.",
      purrchase_desc: "Controle de gastos pet para usuários de iOS.",
      zenith_desc: "Estudo de interface para exploração de dados espaciais.",
      footer_text: "© 2024 Bernardo Fensterseifer"
    },
    en: {
      name: "Bernardo Fensterseifer",
      role: "iOS Developer",
      location: "Porto Alegre, Brazil",
      all: "All",
      ios: "iOS",
      design: "Design",
      process_title: "Process & Technologies",
      tech_ios: "iOS Development",
      tech_design: "Product Design",
      shiro_desc: "Team-developed project focused on accessibility and minimalism.",
      purrchase_desc: "Pet expense tracking for iOS users.",
      zenith_desc: "Interface study for spatial data exploration.",
      footer_text: "© 2024 Bernardo Fensterseifer"
    },
    ja: {
      name: "ベルナルド・フェンステルゼイファー",
      role: "iOSデベロッパー",
      location: "ブラジル、ポルト・アレグレ",
      all: "すべて",
      ios: "iOS",
      design: "デザイン",
      process_title: "プロセスと技術",
      tech_ios: "iOS開発",
      tech_design: "プロダクトデザイン",
      shiro_desc: "アクセシビリティとミニマリズムに焦点を当てたチーム開発プロジェクト。",
      purrchase_desc: "iOSユーザー向けのペット費用追跡。",
      zenith_desc: "宇宙データ探索のためのインターフェース研究。",
      footer_text: "© 2024 ベルナルド・フェンステルゼイファー"
    }
  };
  
  function setLang(lang) {
    document.documentElement.dataset.lang = lang;
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.dataset.t;
      if (T[lang][key]) el.textContent = T[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.l === lang);
    });
    localStorage.setItem('lang', lang);
  }
  
  function detectLang() {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    const browser = (navigator.language || 'en').toLowerCase();
    if (browser.startsWith('pt')) return 'pt';
    if (browser.startsWith('ja')) return 'ja';
    return 'en';
  }
  
  // ── FILTRO DE PROJETOS ──
  function filterProjects(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
    document.querySelectorAll('.project-card').forEach(card => {
      const match = cat === 'all' || card.dataset.category === cat;
      card.style.display = match ? 'block' : 'none';
    });
  }
  
  // ── ACCORDION ──
  function toggleProcess(btn) {
    const content = btn.nextElementSibling;
    const isOpen = content.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  }
  
  // ── AVATAR ROTATIVO (Novo) ──
  const profileImages = [
    'profileImages/profile1.png',
    'profileImages/profile2.png',
    'profileImages/profile3.png'
  ];
  let currentImgIdx = 0;
  const avatarImg = document.getElementById('profile-avatar');
  
  function rotateAvatar() {
    if (!avatarImg) return;
    currentImgIdx = (currentImgIdx + 1) % profileImages.length;
    avatarImg.style.opacity = 0;
    setTimeout(() => {
      avatarImg.src = profileImages[currentImgIdx];
      avatarImg.style.opacity = 1;
    }, 600);
  }
  
  // ── INICIALIZAÇÃO ──
  document.addEventListener('DOMContentLoaded', () => {
    setLang(detectLang());
    setInterval(rotateAvatar, 4000); // Troca a cada 4 segundos
  });