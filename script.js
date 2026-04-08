/* ═══════════════════════════════════════════
   BERNARDO FENSTERSEIFER — PORTFOLIO
   script.js
   ═══════════════════════════════════════════ */

/* ── i18n TRANSLATIONS ── */
const translations = {

    pt: {
      skip: "Pular para o conteúdo",
      nav_about: "Sobre", nav_projects: "Projetos", nav_experience: "Experiência", nav_contact: "Contato",
      hero_eyebrow: "iOS Developer · Porto Alegre, Brasil",
      hero_h1: "Bernardo<br><em>Fensterseifer</em>",
      hero_desc: "Construo apps nativos Apple — do iPhone ao Vision Pro. Três apps na App Store. Dois anos na Apple Developer Academy. Top 10 no Startup Garage. Não só escrevo código — resolvo problemas com visão de produto.",
      pill_finalist: "Startup Garage Top 10", pill_apps: "3 Apps na App Store", pill_apple: "Ecossistema Apple", pill_eng: "Inglês Fluente",
      cta_work: "Ver projetos", cta_contact: "Entrar em contato", scroll: "Rolar",
      about_eyebrow: "01 — Sobre",
      about_title: "Desenvolvedor.<br><em>Criativo. Atleta.</em>",
      about_p1: "<strong>Estudante de Ciência da Computação na PUCRS</strong> e desenvolvedor iOS na Apple Developer Academy — construindo produtos reais no ecossistema Apple há mais de dois anos.",
      about_p2: "Atuo em todo o ciclo de produto: da descoberta do problema e UX no <strong>Figma</strong>, ao código Swift, QA, testes beta no TestFlight e publicação na App Store. Três apps entregues com usuários reais.",
      about_p3: "Trabalhei em <strong>times SCRUM</strong> desde o início — liderando sprints, fazendo code reviews e entregando continuamente. Fiz pitches para investidores, participei de podcasts e cheguei ao <strong>Top 10 no Startup Garage</strong>.",
      about_p4: "Além da tecnologia: jogo basquete de forma competitiva e toco piano em nível avançado. Disciplina, precisão e criatividade — tudo isso alimenta a forma como construo software.",
      stat_apps: "Apps na App Store", stat_years: "Anos na Apple Dev Academy", stat_startup: "Finalista Startup Garage", stat_platforms: "Plataformas Apple",
      beyond_eyebrow: "02 — Além do Código",
      beyond_title: "O que me torna<br><em>um desenvolvedor melhor</em>",
      bball_title: "Basquete",
      bball_body: "Jogo basquete de forma competitiva — <strong>decisões rápidas sob pressão</strong>, leitura de time, adaptação de estratégia no meio do jogo. O mesmo modelo mental se aplica ao planejamento de sprints, debugging sob deadline e pivôs ágeis. O esporte constrói a resiliência para enfrentar problemas difíceis sem desistir.",
      bball_link: "Ver perfil no Go-Champs",
      piano_title: "Piano",
      piano_body: "Toco piano em nível avançado. Música é a disciplina da <strong>precisão, reconhecimento de padrões e criatividade estruturada</strong> — as mesmas habilidades que fazem código elegante. Ler uma partitura complexa treina a capacidade de manter múltiplos sistemas em mente simultaneamente. Isso também explica a trilha sonora original desenvolvida no projeto <strong>Shiro.</strong>",
      skills_eyebrow: "03 — Tecnologias",
      skills_title: "Stack &amp;<br><em>Ferramentas</em>",
      skill_apple: "Ecossistema Apple", skill_platforms: "Plataformas", skill_design: "Design &amp; Web", skill_process: "Processo", skill_lang: "Idiomas",
      lang_pt: "Português — Nativo", lang_en: "Inglês — Fluente", lang_ja: "Japonês — Básico",
      proj_eyebrow: "04 — Projetos",
      proj_title: "Coisas que<br><em>entreguei</em>",
      filter_all: "Todos", filter_apps: "iOS Apps", filter_games: "Games", filter_academic: "Acadêmico",
      process_label: "Processo &amp; Tecnologias",
      proc_problem: "Problema", proc_process: "Processo", proc_role: "Meu papel", proc_result: "Resultado",
      cat_health: "Saúde · iOS", cat_creative: "Criatividade · iOS", cat_game: "Jogo · iOS", cat_game_dev: "Jogo · Em Desenvolvimento", cat_academic: "Acadêmico · UIKit",
      clairfy_tagline: "Consultas médicas são cheias de jargão. Pacientes saem confusos e perdem informações. O Clairfy gera resumos claros e instantâneos para médicos e pacientes — a partir do áudio.",
      clairfy_problem: "Médicos falam em linguagem técnica. Pacientes esquecem 40–80% do que ouviram. Nenhum app focava na consulta em si.",
      clairfy_process: "<strong>CBL + SCRUM</strong> — definição do desafio, entrevistas com usuários, prototipação no Figma, desenvolvimento iterativo em Swift.",
      clairfy_role: "Desenvolvimento iOS (Swift/SwiftUI), design UX, QA via TestFlight, publicação na App Store e pitch — incluindo a <strong>rodada final Top 10 do Startup Garage</strong> e o podcast BioHub/Tecnopuc.",
      clairfy_result: "Live na App Store com distribuição internacional. Top 10 no Startup Garage. Destaque no podcast BioHub.",
      ziner_tagline: "Criar zines exige ferramentas de desktop complexas. O Ziner torna possível no iPhone — editor completo de 8 páginas, exportação em PDF pronto para impressão.",
      ziner_problem: "Nenhum app mobile dedicado ao formato zine. O formato tem restrições de dobra que ferramentas genéricas não respeitam.",
      ziner_process: "<strong>CBL</strong> — pesquisa com comunidades de zines, mapeamento de dores, UX no Figma, PDFKit e canvas SwiftUI.",
      ziner_role: "Swift/SwiftUI, PDFKit, design UX seguindo HIG da Apple, QA e lançamento na App Store.",
      ziner_result: "Live na App Store. O único editor de zines dedicado no iOS.",
      shiro_tagline: "Jogo de escalada vertical com estética Game Boy retrô, desenvolvido em equipe na Apple Developer Academy. Arte em pixel, trilha sonora original e integração com Game Center para placares globais.",
      shiro_problem: "Construir uma experiência de jogo coesa e completa — design, programação, arte e som — em equipe, dentro do ciclo de desafio da Academy.",
      shiro_process: "Design do loop de jogo colaborativo, <strong>pixel art</strong>, composição de <strong>trilha chiptune</strong> original, física no SpriteKit, integração com Game Center.",
      shiro_role: "Desenvolvimento Swift/SpriteKit, composição musical, pixel art, QA e publicação — em colaboração com a equipe.",
      shiro_result: "Live na App Store. Placares globais e locais no Game Center.",
      zenith_tagline: "Jogo top-down em pixel art com progressão de inimigos por ondas. Mecânicas mais ricas, maior profundidade. Lançamento na App Store em breve.",
      wip_badge: "Em breve na App Store",
      purrchase_tagline: "Primeiro app iOS — assistente de compras construído para aprender UIKit. Não está na App Store, mas foi a base para tudo que veio depois.",
      purrchase_role: "UIKit, Auto Layout, padrão de delegação, arquitetura MVC e fluxo completo do Xcode ao TestFlight.",
      appstore_btn: "App Store", podcast_btn: "Podcast",
      exp_eyebrow: "05 — Experiência",
      exp_title: "Onde<br><em>trabalhei</em>",
      exp_role: "Estagiário de Desenvolvimento iOS",
      exp_period: "Fevereiro 2023 – Presente · 2+ anos · Porto Alegre, RS",
      exp_b1: "Desenvolvi e publiquei <strong>3 apps iOS nativos</strong> na App Store — usuários reais, distribuição internacional.",
      exp_b2: "Entreguei para toda a <strong>stack de plataformas Apple</strong>: iPhone, iPad, macOS, Apple Watch e Apple Vision Pro.",
      exp_b3: "Liderei planejamento de sprints, code reviews e entrega contínua em <strong>times SCRUM multifuncionais</strong>.",
      exp_b4: "Projetei UI/UX no <strong>Figma</strong>, seguindo as HIG da Apple para interfaces acessíveis e refinadas.",
      exp_b5: "Gerenciei QA, testes beta e releases via <strong>App Store Connect e TestFlight</strong>.",
      exp_b6: "Fiz pitch do Clairfy para investidores no <strong>Startup Garage — Top 10 finalista</strong>.",
      exp_b7: "Destaque no <strong>podcast BioHub/Tecnopuc</strong> comunicando visão de produto e arquitetura técnica.",
      awards_eyebrow: "06 — Reconhecimento",
      award1_name: "Startup Garage — Top 10 Finalista",
      award1_desc: "Selecionado entre as 10 melhores startups. Apresentei o Clairfy na rodada final para investidores, mentores e especialistas de saúde na PUCRS.",
      award2_name: "BioHub / Tecnopuc Podcast",
      award2_desc: "Convidado para apresentar o Clairfy — visão do produto, impacto clínico e arquitetura técnica.",
      award2_link: "Assistir no YouTube",
      award3_name: "Apple Developer Academy — 2 Anos",
      award3_desc: "Aceito e reavaliado a cada ano em múltiplos ciclos de desafios em um dos programas oficiais de treinamento da Apple.",
      award4_name: "3 Apps na App Store",
      award4_desc: "Clairfy, Ziner e Shiro. — três apps de produção com usuários reais e distribuição internacional, entregues ainda como estudante.",
      contact_title: "Vamos construir<br><em>algo juntos</em>",
      contact_desc: "Aberto a oportunidades de estágio, colaborações e conversas interessantes. Baseado em Porto Alegre — trabalhando remotamente.",
      contact_email: "Enviar e-mail",
      ci_location: "Localização", ci_poa: "Porto Alegre, RS — Brasil",
      resume_en: "Resume (EN)", resume_pt: "Currículo (PT)",
      footer_role: "iOS Developer · PUCRS — Ciência da Computação",
      footer_copy: "© 2025 Bernardo Garcia Fensterseifer",
    },
  
    en: {
      skip: "Skip to content",
      nav_about: "About", nav_projects: "Projects", nav_experience: "Experience", nav_contact: "Contact",
      hero_eyebrow: "iOS Developer · Porto Alegre, Brazil",
      hero_h1: "Bernardo<br><em>Fensterseifer</em>",
      hero_desc: "I build native Apple apps — from iPhone to Vision Pro. Three apps live on the App Store. Two years at Apple Developer Academy. Startup Garage Top 10. I don't just write code — I solve real problems with product thinking.",
      pill_finalist: "Startup Garage Top 10", pill_apps: "3 Apps on App Store", pill_apple: "Apple Ecosystem", pill_eng: "English Fluent",
      cta_work: "See my work", cta_contact: "Get in touch", scroll: "Scroll",
      about_eyebrow: "01 — About",
      about_title: "Developer.<br><em>Creator. Athlete.</em>",
      about_p1: "<strong>Computer Science student at PUCRS</strong> and iOS developer at the Apple Developer Academy — building real products in the full Apple ecosystem for over two years.",
      about_p2: "I work across the entire product lifecycle: from problem discovery and UX in <strong>Figma</strong>, to Swift code, QA, TestFlight beta testing and App Store submission. Three apps shipped with real users.",
      about_p3: "I've worked in <strong>SCRUM teams</strong> since day one — leading sprints, code reviews, and shipping continuously. I've pitched to investors, presented on podcasts, and reached the <strong>Top 10 at Startup Garage</strong>.",
      about_p4: "Beyond tech: I play basketball competitively and piano at an advanced level. Discipline, precision, and creative flow — all of it feeds back into how I build software.",
      stat_apps: "Apps on App Store", stat_years: "Years at Apple Dev Academy", stat_startup: "Startup Garage Finalist", stat_platforms: "Apple Platforms",
      beyond_eyebrow: "02 — Beyond Code",
      beyond_title: "What makes me<br><em>a better developer</em>",
      bball_title: "Basketball",
      bball_body: "I play basketball at a competitive level — <strong>fast decisions under pressure</strong>, reading teammates, adapting strategy mid-play. The same mental model applies to sprint planning, debugging under deadlines and agile pivots. Sport builds the resilience to push through hard problems without giving up.",
      bball_link: "View profile on Go-Champs",
      piano_title: "Piano",
      piano_body: "I play piano at an advanced level. Music is the discipline of <strong>precision, pattern recognition and structured creativity</strong> — the same skills that make elegant code. Reading a complex score trains the ability to hold multiple systems in mind simultaneously. It also explains the original soundtrack developed for the <strong>Shiro.</strong> project.",
      skills_eyebrow: "03 — Technologies",
      skills_title: "Stack &amp;<br><em>Tools</em>",
      skill_apple: "Apple Ecosystem", skill_platforms: "Platforms", skill_design: "Design &amp; Web", skill_process: "Process", skill_lang: "Languages",
      lang_pt: "Portuguese — Native", lang_en: "English — Fluent", lang_ja: "Japanese — Basic",
      proj_eyebrow: "04 — Projects",
      proj_title: "Things I've<br><em>shipped</em>",
      filter_all: "All", filter_apps: "iOS Apps", filter_games: "Games", filter_academic: "Academic",
      process_label: "Process &amp; Technologies",
      proc_problem: "Problem", proc_process: "Process", proc_role: "My role", proc_result: "Result",
      cat_health: "Health · iOS", cat_creative: "Creative · iOS", cat_game: "Game · iOS", cat_game_dev: "Game · In Development", cat_academic: "Academic · UIKit",
      clairfy_tagline: "Medical consultations are full of jargon. Patients leave confused and lose important information. Clairfy generates instant, clear summaries for both doctors and patients — from audio.",
      clairfy_problem: "Doctors speak in medical language. Patients forget 40–80% of what they're told. No existing app focused on the consultation itself.",
      clairfy_process: "<strong>CBL + SCRUM</strong> — challenge framing, user interviews, rapid prototyping in Figma, iterative Swift development across multiple sprints.",
      clairfy_role: "iOS development (Swift/SwiftUI), UX design, QA via TestFlight, App Store submission, and pitching — including the <strong>Startup Garage Top 10 final round</strong> and the BioHub/Tecnopuc podcast.",
      clairfy_result: "Live on the App Store with international distribution. Top 10 at Startup Garage. Featured on BioHub podcast.",
      ziner_tagline: "Creating zines requires complex desktop tools. Ziner makes it possible on iPhone — full 8-page editor, PDF export ready for printing.",
      ziner_problem: "No dedicated mobile app for the zine format. The format has strict folding constraints no general design tool respects.",
      ziner_process: "<strong>CBL</strong> — researched zine communities, mapped pain points, Figma UX, PDFKit and SwiftUI canvas.",
      ziner_role: "Swift/SwiftUI, PDFKit, UX design following Apple HIG, QA and App Store release.",
      ziner_result: "Live on the App Store. The only dedicated zine editor on iOS.",
      shiro_tagline: "A vertical climbing game with a retro Game Boy aesthetic, developed as a team at Apple Developer Academy. Pixel art, original soundtrack and Game Center integration for global leaderboards.",
      shiro_problem: "Build a complete and cohesive game experience — design, programming, art and sound — as a team, within the Academy's challenge cycle.",
      shiro_process: "Collaborative game loop design, <strong>pixel art</strong>, original <strong>chiptune soundtrack</strong>, SpriteKit physics, Game Center integration.",
      shiro_role: "Swift/SpriteKit development, music composition, pixel art, QA and App Store submission — in collaboration with the team.",
      shiro_result: "Live on App Store. Global and local Game Center leaderboards.",
      zenith_tagline: "A top-down pixel art game with wave-based enemy progression. Richer mechanics, deeper gameplay. App Store launch coming soon.",
      wip_badge: "Coming to App Store",
      purrchase_tagline: "My first iOS app — a shopping assistant built to learn UIKit. Not on the App Store, but the foundation that led to everything else.",
      purrchase_role: "UIKit, Auto Layout, delegation pattern, MVC architecture and the full Xcode to TestFlight workflow.",
      appstore_btn: "App Store", podcast_btn: "Podcast",
      exp_eyebrow: "05 — Experience",
      exp_title: "Where I've<br><em>worked</em>",
      exp_role: "iOS Developer Intern",
      exp_period: "February 2023 – Present · 2+ years · Porto Alegre, RS",
      exp_b1: "Built and shipped <strong>3 native iOS apps</strong> to the App Store — real users, international distribution.",
      exp_b2: "Delivered across the <strong>full Apple platform stack</strong>: iPhone, iPad, macOS, Apple Watch, and Apple Vision Pro.",
      exp_b3: "Led sprint planning, code reviews, and continuous delivery in <strong>cross-functional SCRUM teams</strong>.",
      exp_b4: "Designed all UI/UX in <strong>Figma</strong>, following Apple's Human Interface Guidelines.",
      exp_b5: "Managed QA, beta testing, and release workflows via <strong>App Store Connect and TestFlight</strong>.",
      exp_b6: "Pitched Clairfy to investors at <strong>Startup Garage — Top 10 finalist</strong>.",
      exp_b7: "Featured on <strong>BioHub/Tecnopuc podcast</strong> communicating product vision and technical architecture.",
      awards_eyebrow: "06 — Recognition",
      award1_name: "Startup Garage — Top 10 Finalist",
      award1_desc: "Selected among the top 10 startups. Pitched Clairfy in the final round to investors, mentors and healthcare experts at PUCRS.",
      award2_name: "BioHub / Tecnopuc Podcast",
      award2_desc: "Invited to present Clairfy — product vision, clinical impact and technical architecture.",
      award2_link: "Watch on YouTube",
      award3_name: "Apple Developer Academy — 2 Years",
      award3_desc: "Accepted and re-evaluated each year across multiple challenge cycles at one of Apple's official global developer training programs.",
      award4_name: "3 Apps on the App Store",
      award4_desc: "Clairfy, Ziner and Shiro. — three production apps with real users and international distribution, shipped while still a student.",
      contact_title: "Let's build<br><em>something together</em>",
      contact_desc: "Open to internship opportunities, collaborations and interesting conversations. Based in Porto Alegre — working remotely.",
      contact_email: "Send an email",
      ci_location: "Location", ci_poa: "Porto Alegre, RS — Brazil",
      resume_en: "Resume (EN)", resume_pt: "Currículo (PT)",
      footer_role: "iOS Developer · PUCRS — Computer Science",
      footer_copy: "© 2025 Bernardo Garcia Fensterseifer",
    },
  
    ja: {
      skip: "メインコンテンツへスキップ",
      nav_about: "概要", nav_projects: "プロジェクト", nav_experience: "経験", nav_contact: "連絡",
      hero_eyebrow: "iOSデベロッパー · ポルトアレグレ、ブラジル",
      hero_h1: "ベルナルド<br><em>フェンスターザイファー</em>",
      hero_desc: "iPhoneからVision Proまで、Appleのネイティブアプリを開発しています。App Storeに3本リリース済み。Apple Developer Academyで2年以上の経験。Startup Garage Top 10。コードを書くだけでなく、プロダクト思考で本物の問題を解決します。",
      pill_finalist: "Startup Garage Top 10", pill_apps: "App Storeに3本", pill_apple: "Appleエコシステム", pill_eng: "英語流暢",
      cta_work: "プロジェクトを見る", cta_contact: "連絡する", scroll: "スクロール",
      about_eyebrow: "01 — 概要",
      about_title: "デベロッパー。<br><em>クリエイター。アスリート。</em>",
      about_p1: "PUCRSで<strong>コンピューターサイエンスを専攻</strong>し、Apple Developer AcademyでiOSデベロッパーとして2年以上、Appleエコシステム全体でリアルなプロダクトを構築しています。",
      about_p2: "問題発見からFigmaでのUXデザイン、Swiftコーディング、QA、TestFlightベータテスト、App Store申請まで、プロダクトライフサイクル全体を担当しています。実ユーザーを持つ3本のアプリをリリース済み。",
      about_p3: "<strong>SCRUMチーム</strong>でスプリント計画やコードレビューをリードし、継続的にデリバリーしてきました。投資家へのピッチ、ポッドキャスト出演、そして<strong>Startup Garage Top 10</strong>入りも経験しました。",
      about_p4: "テック以外では、バスケットボールを競技レベルでプレーし、ピアノを上級レベルで演奏しています。規律、精度、創造的なフロー——すべてがソフトウェア開発に活かされています。",
      stat_apps: "App Storeのアプリ数", stat_years: "Apple Dev Academy在籍年数", stat_startup: "Startup Garageファイナリスト", stat_platforms: "Appleプラットフォーム数",
      beyond_eyebrow: "02 — コードの外側",
      beyond_title: "私をより良い<br><em>デベロッパーにするもの</em>",
      bball_title: "バスケットボール",
      bball_body: "競技レベルでバスケットボールをプレーしています——<strong>プレッシャー下での素早い判断</strong>、チームメイトの読み取り、試合中の戦略適応。同じ思考モデルがスプリント計画、デッドライン下でのデバッグ、アジャイルなピボットにも適用されます。スポーツは困難な問題に諦めずに向き合うレジリエンスを育てます。",
      bball_link: "Go-Champsでプロフィールを見る",
      piano_title: "ピアノ",
      piano_body: "上級レベルでピアノを演奏しています。音楽は<strong>精度、パターン認識、構造化された創造性</strong>の訓練——これはエレガントなコードを書くのと同じスキルです。複雑な楽譜を読むことは、複数のシステムを同時に頭の中で保持する能力を鍛えます。これは<strong>Shiro.</strong>プロジェクトで開発したオリジナルサウンドトラックにも現れています。",
      skills_eyebrow: "03 — テクノロジー",
      skills_title: "スタック &amp;<br><em>ツール</em>",
      skill_apple: "Appleエコシステム", skill_platforms: "プラットフォーム", skill_design: "デザイン &amp; Web", skill_process: "プロセス", skill_lang: "言語",
      lang_pt: "ポルトガル語 — ネイティブ", lang_en: "英語 — 流暢", lang_ja: "日本語 — 基礎",
      proj_eyebrow: "04 — プロジェクト",
      proj_title: "リリースした<br><em>プロジェクト</em>",
      filter_all: "すべて", filter_apps: "iOSアプリ", filter_games: "ゲーム", filter_academic: "学習",
      process_label: "プロセス &amp; テクノロジー",
      proc_problem: "課題", proc_process: "プロセス", proc_role: "私の役割", proc_result: "結果",
      cat_health: "ヘルス · iOS", cat_creative: "クリエイティブ · iOS", cat_game: "ゲーム · iOS", cat_game_dev: "ゲーム · 開発中", cat_academic: "学習 · UIKit",
      clairfy_tagline: "医療相談は専門用語だらけ。患者は混乱し、重要な情報を失います。Clairfyは音声から医師と患者の両方に向けた明確なサマリーを即座に生成することでこれを解決します。",
      clairfy_problem: "医師は医学用語で話す。患者は聞いたことの40〜80%を忘れる。相談そのものに焦点を当てた既存アプリはなかった。",
      clairfy_process: "<strong>CBL + SCRUM</strong>——課題定義、ユーザーインタビュー、Figmaでの高速プロトタイプ、複数スプリントでの反復的Swift開発。",
      clairfy_role: "iOS開発（Swift/SwiftUI）、UXデザイン、TestFlightによるQA、App Store申請とピッチ——<strong>Startup Garage Top 10ファイナルラウンド</strong>とBioHub/Tecnopucポッドキャストを含む。",
      clairfy_result: "国際配信でApp Storeにリリース済み。Startup Garage Top 10。BioHubポッドキャストに掲載。",
      ziner_tagline: "ジン作りには複雑なデスクトップツールが必要。ZinerはiPhoneで可能にします——8ページの完全エディター、印刷用PDFエクスポート。",
      ziner_problem: "ジン形式に特化したモバイルアプリは存在しなかった。この形式には折り畳みの制約があり、汎用デザインツールでは対応できない。",
      ziner_process: "<strong>CBL</strong>——ジンコミュニティのリサーチ、課題マッピング、FigmaでのUX、PDFKitとSwiftUIキャンバスでの実装。",
      ziner_role: "Swift/SwiftUI、PDFKit、Apple HIG準拠のUXデザイン、QA、App Storeリリース。",
      ziner_result: "App Storeにリリース済み。iOS唯一の専用ジンエディター。",
      shiro_tagline: "Apple Developer Academyでチームが開発したレトロゲームボーイ風の縦スクロールクライミングゲーム。ピクセルアート、オリジナルサウンドトラック、Game Centerでのグローバルリーダーボード。",
      shiro_problem: "Academyのチャレンジサイクル内で、デザイン、プログラミング、アート、サウンドを含む完全で一貫したゲーム体験をチームで構築する。",
      shiro_process: "チームでのゲームループ設計、<strong>ピクセルアート</strong>、オリジナル<strong>チップチューンサウンドトラック</strong>の作曲、SpriteKitによる物理演算、Game Center統合。",
      shiro_role: "Swift/SpriteKit開発、音楽作曲、ピクセルアート、QA、App Store申請——チームとの協力。",
      shiro_result: "App Storeにリリース済み。Game Centerでローカル・グローバルリーダーボード。",
      zenith_tagline: "ウェーブベースの敵進行を持つトップダウンピクセルアートゲーム。より豊かなメカニクス、深いゲームプレイ。App Storeリリース近日公開。",
      wip_badge: "App Storeに近日公開",
      purrchase_tagline: "最初のiOSアプリ——UIKitを学ぶために作ったショッピングアシスタント。App Storeにはないが、その後のすべての基盤となった作品。",
      purrchase_role: "UIKit、Auto Layout、デリゲーションパターン、MVCアーキテクチャ、XcodeからTestFlightまでの完全なワークフロー。",
      appstore_btn: "App Store", podcast_btn: "ポッドキャスト",
      exp_eyebrow: "05 — 経験",
      exp_title: "働いてきた<br><em>場所</em>",
      exp_role: "iOSデベロッパーインターン",
      exp_period: "2023年2月 – 現在 · 2年以上 · ポルトアレグレ、RS",
      exp_b1: "App Storeに<strong>3本のネイティブiOSアプリ</strong>をリリース——実ユーザー、国際配信。",
      exp_b2: "<strong>Apple全プラットフォームスタック</strong>——iPhone、iPad、macOS、Apple Watch、Apple Vision Proで開発。",
      exp_b3: "<strong>クロスファンクショナルSCRUMチーム</strong>でスプリント計画、コードレビュー、継続的デリバリーをリード。",
      exp_b4: "Apple Human Interface Guidelinesに従い<strong>Figma</strong>でUI/UX全体を設計。",
      exp_b5: "<strong>App Store ConnectとTestFlight</strong>でQA、ベータテスト、リリースを管理。",
      exp_b6: "<strong>Startup Garage——Top 10ファイナリスト</strong>として投資家にClairfyをピッチ。",
      exp_b7: "<strong>BioHub/Tecnopucポッドキャスト</strong>でプロダクトビジョンと技術アーキテクチャを発信。",
      awards_eyebrow: "06 — 受賞・実績",
      award1_name: "Startup Garage — Top 10ファイナリスト",
      award1_desc: "全チームの中からTop 10に選出。PUCRSで投資家・メンター・医療専門家の前でClairfyをピッチ。",
      award2_name: "BioHub / Tecnopucポッドキャスト",
      award2_desc: "プロダクトビジョン、臨床インパクト、技術アーキテクチャを発信するため招待出演。",
      award2_link: "YouTubeで見る",
      award3_name: "Apple Developer Academy — 2年",
      award3_desc: "Appleの公式グローバル開発者トレーニングプログラムで毎年選抜・再評価。",
      award4_name: "App Storeに3本のアプリ",
      award4_desc: "Clairfy、Ziner、Shiro.——学生でありながら実ユーザーと国際配信を持つ3本のプロダクションアプリ。",
      contact_title: "一緒に<br><em>何か作りましょう</em>",
      contact_desc: "インターンシップ、コラボレーション、面白い会話を歓迎します。ポルトアレグレ在住、リモート対応可。",
      contact_email: "メールを送る",
      ci_location: "場所", ci_poa: "ポルトアレグレ、RS — ブラジル",
      resume_en: "Resume (EN)", resume_pt: "履歴書 (PT)",
      footer_role: "iOSデベロッパー · PUCRS — コンピューターサイエンス",
      footer_copy: "© 2025 ベルナルド・ガルシア・フェンスターザイファー",
    }
  
  };
  
  /* ── LANGUAGE ── */
  function setLang(lang) {
    const html = document.documentElement;
    html.lang = lang === 'pt' ? 'pt-BR' : lang === 'ja' ? 'ja' : 'en';
    html.dataset.lang = lang;
  
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });
  
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.l === lang);
    });
  
    try { localStorage.setItem('lang', lang); } catch (_) {}
  }
  
  function detectLang() {
    try {
      const saved = localStorage.getItem('lang');
      if (saved && translations[saved]) return saved;
    } catch (_) {}
    const browser = (navigator.language || 'en').toLowerCase();
    if (browser.startsWith('pt')) return 'pt';
    if (browser.startsWith('ja')) return 'ja';
    return 'en';
  }
  
  /* ── PROJECT FILTER ── */
  function filterProjects(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === cat);
    });
    document.querySelectorAll('.project-card').forEach(card => {
      const match = cat === 'all' || card.dataset.category === cat;
      if (match) {
        delete card.dataset.hidden;
        card.style.display = '';
      } else {
        card.dataset.hidden = '';
        card.style.display = 'none';
      }
    });
  }
  
  /* ── PROCESS ACCORDION ── */
  function toggleProcess(btn) {
    const section = btn.closest('.process-section');
    const isOpen = section.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  }
  
  /* ── PROFILE CAROUSEL ── */
  function initCarousel() {
    const imgs  = document.querySelectorAll('.carousel-img');
    const dots  = document.querySelectorAll('.dot');
    if (!imgs.length) return;
  
    let current = 0;
  
    function goTo(idx) {
      imgs[current].classList.remove('active');
      dots[current] && dots[current].classList.remove('active');
      current = (idx + imgs.length) % imgs.length;
      imgs[current].classList.add('active');
      dots[current] && dots[current].classList.add('active');
    }
  
    // Dots are clickable
    dots.forEach((dot, i) => {
      dot.style.cursor = 'pointer';
      dot.addEventListener('click', () => goTo(i));
    });
  
    // Auto-rotate every 3.5s
    setInterval(() => goTo(current + 1), 3500);
  }
  
  /* ── SCROLL REVEAL ── */
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 55);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
  
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  
  /* ── INIT ── */
  document.addEventListener('DOMContentLoaded', () => {
    setLang(detectLang());
    initCarousel();
    initReveal();
  });