import TopNav from "@/components/TopNav";
import contactPhoto1 from "@/assets/photo4.jpg";
import contactPhoto2 from "@/assets/photo28.jpg";
import { Instagram, Phone, Clapperboard } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <main style={{ background: "#000", color: "#fff", fontFamily: "'Space Grotesk', monospace", minHeight: "100vh", position: "relative", overflow: isMobile ? "auto" : "hidden" }}>
      <TopNav />
      
      {/* Hero image */}
      {isMobile ? (
        <div style={{ position: "relative", width: "100%", height: "75vh" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "100%", height: "100%" }}>
            {[contactPhoto1, contactPhoto2].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Николай Алёхин"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }}
              />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.75) 78%, #000 100%)",
              pointerEvents: "none",
            }}
          />
        </div>
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {[contactPhoto1, contactPhoto2].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Николай Алёхин"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay (desktop only) */}
      {!isMobile && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, transparent 30%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.92) 100%)",
          pointerEvents: "none",
        }} />
      )}

      {/* Contact info */}
      <div style={{
        position: isMobile ? "relative" : "absolute",
        top: isMobile ? undefined : 0,
        right: isMobile ? undefined : 0,
        bottom: isMobile ? undefined : 0,
        width: isMobile ? "100%" : "42%",
        display: "flex",
        flexDirection: "column",
        justifyContent: isMobile ? "flex-start" : "center",
        padding: isMobile ? "0 28px 48px" : "60px 48px 60px 32px",
        marginTop: isMobile ? 0 : undefined,
        zIndex: 10,
      }}>
        {/* Name */}
        <h1 style={{
          fontSize: isMobile ? 24 : 28,
          fontWeight: 300,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          marginBottom: 4,
          lineHeight: 1.2,
        }}>
          НИКОЛАЙ<br />АЛЁХИН
        </h1>
        <p style={{
          fontSize: isMobile ? 10 : 11,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          marginBottom: isMobile ? 28 : 40,
        }}>
          актёр · г. талдыкорган
        </p>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)", marginBottom: isMobile ? 24 : 36 }} />

        {/* Instagram */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: isMobile ? 22 : 28 }}>
          <Instagram size={16} style={{ marginTop: 2, opacity: 0.5, flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Портфолио
            </p>
            <a
              href="https://instagram.com/Nikola_transformator"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
            >
              @Nikola_transformator
            </a>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 4, letterSpacing: "0.05em" }}>
              все работы · реклама · роли
            </p>
          </div>
        </div>

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: isMobile ? 22 : 28 }}>
          <Phone size={16} style={{ marginTop: 2, opacity: 0.5, flexShrink: 0 }} />
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Контакты
            </p>
            <a href="tel:+77776868526" style={{ fontSize: 13, letterSpacing: "0.1em", color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "block", marginBottom: 4 }}>
              +7 777 686 8526
            </a>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>звонки / WhatsApp</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)", marginBottom: isMobile ? 20 : 28 }} />

        {/* Quote */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
          <Clapperboard size={16} style={{ marginTop: 2, opacity: 0.35, flexShrink: 0 }} />
          <p style={{
            fontSize: 12,
            fontStyle: "italic",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
          }}>
            «Любая роль — от бандита до директора»
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
