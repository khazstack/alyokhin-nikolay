import TopNav from "@/components/TopNav";
import aboutHero from "@/assets/photo29.jpg";

const About = () =>
<main className="bg-black text-white min-h-screen" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
    <TopNav />

    {/* Hero */}
    <section className="relative md:h-screen overflow-hidden">
      <img
        src={aboutHero}
        alt="Николай Алёхин"
        className="block w-full h-auto max-h-[85vh] object-contain object-[center_20%] bg-black md:absolute md:inset-0 md:h-full md:max-h-none md:object-cover md:opacity-70"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.25) 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.7) 78%, rgba(0,0,0,0.25) 92%, transparent 100%)",
        }}
      />
    
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative md:absolute md:bottom-16 md:left-0 md:right-0 text-center px-6 -mt-16 md:mt-0 pb-8 md:pb-0">
        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tight uppercase mb-4">
          Николай Алёхин
        </h1>
        <p className="text-[11px] md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/70 whitespace-nowrap">
          АКТЁР — г. ТАЛДЫКОРГАН
        </p>
      </div>
    </section>

    {/* Bio */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <p className="text-base md:text-lg leading-[1.9] text-white/80 text-center">
        Актёр с опытом съёмок в полнометражных фильмах, сериалах, музыкальных клипах и рекламе. Играю как эпизодические, так и главные роли — от посетителей бара до убийц и главарей мафии. Разговариваю на казахском и английском. Готов к смене образа: бритьё лица или головы не проблема.
      </p>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Основная информация */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Основная информация
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-base">
        {[
      ["Полное имя", "Алёхин Николай Алексеевич"],
      ["Возраст", "40 лет"],
      ["Дата рождения", "06.10.1985"],
      ["Рост", "182 см"],
      ["Вес", "82 кг"],
      ["Цвет глаз", "Серо-голубые"],
      ["Размер верха", "54"],
      ["Размер брюк", "34"],
      ["Размер обуви", "45"],
      ["Размер головы", "58–59"],
      ["Город", "Талдыкорган"],
      ["Языки", "Казахский, английский (разговорный)"]].
      map(([label, value]) =>
      <div key={label} className="flex justify-between items-baseline py-3 border-b border-white/10">
            <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-semibold">{label}</span>
            <span className="text-base md:text-lg font-bold text-right">{value}</span>
          </div>
      )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Фильмография */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Фильмография
      </h2>
      <div className="space-y-5">
        {[
          { title: "«Стоп ночь. Солдат любви» (мюзикл)", role: "Посетитель бара", year: "2023" },
          { title: "«Эскорт-2»", role: "Посетитель кафе", year: "2023" },
          { title: "«Парасат»", role: "Эпизод — грузчик", year: "2023" },
          { title: "«Сын из будущего, или Салам папа»", role: "Эпизод — бандит", year: "2023" },
          { title: "«Последний Ронин»", role: "Бандит", year: "2023" },
          { title: "«Решающий раунд»", role: "Зритель", year: "2024" },
          { title: "«Аллигатор»", role: "Эпизод — военный сопровождающий", year: "2024" },
          { title: "«Айжан»", role: "Эпизод — зэк", year: "2025" },
          { title: "«Mission Possible» (Индия)", role: "Эпизод — полицейский", year: "2025" },
          { title: "«Было дело — Маньяк из обкома» (сериал)", role: "Второстепенная роль — главный подозреваемый", year: "2023" },
          { title: "«Было дело — Любовь в огне» (сериал)", role: "Главная роль — убийца", year: "2024" },
          { title: "«Было дело — Жажда мести» (сериал)", role: "Главная роль — убийца", year: "2024" },
          { title: "«Түнде атылған оқ» (сериал)", role: "Эпизод — главный мафиози, смотрящий за городом", year: "2023" },
          { title: "«Ханская охота» (сериал)", role: "Эпизод — зэк", year: "2026" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-white/50 font-semibold shrink-0">{item.year}</span>
            </div>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Реклама */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Реклама
      </h2>
      <div className="space-y-5">
        {[
          { title: "«Lucky Bar»", role: "Главная роль — главный мафиози", year: "2023" },
          { title: "«Яндекс»", role: "Турист", year: "2024" },
          { title: "«Турагентство»", role: "Главная роль — директор агентства", year: "2024" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-white/50 font-semibold shrink-0">{item.year}</span>
            </div>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Музыкальные клипы */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Музыкальные клипы
      </h2>
      <div className="space-y-5">
        {[
          { title: "Ninety One — «Біз»", role: "Эпизод — монах", year: "2023" },
          { title: "«Abailashy»", role: "Зритель", year: "2023" },
          { title: "Ирина Кайратовна — «Пацан»", role: "Эпизод — охранник", year: "2024" },
        ].map((item) =>
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg px-5 py-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
              <span className="text-sm text-white/50 font-semibold shrink-0">{item.year}</span>
            </div>
            <p className="text-sm md:text-base text-white/70">
              <span className="text-white/40 uppercase text-xs tracking-wider mr-2">Роль:</span>{item.role}
            </p>
          </div>
        )}
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-6 md:px-16">
      <div className="h-px bg-white/10" />
    </div>

    {/* Дополнительно */}
    <section className="max-w-4xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-12 text-center">
        Дополнительно
      </h2>

      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 text-base">
          {[
            ["Смена образа", "Побрить лицо или голову — не проблема"],
          ].map(([label, value]) =>
            <div key={label} className="flex justify-between items-baseline py-3 border-b border-white/10">
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/50 font-semibold">{label}</span>
              <span className="text-base md:text-lg font-bold text-right">{value}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  </main>;


export default About;
