import Title from "../components/common/Title";
import Paragraph from "../components/common/Paragraph";

export default function Blueprint() {
  return (
    <>
      <Title>Blueprint</Title>

      <Paragraph>
        Abaixo estão os diagramas desenvolvidos para cada fase do projeto.
      </Paragraph>

      {/* FASE 1 */}
      <Paragraph><strong>Fase 1 – Infraestrutura Básica</strong></Paragraph>
      <img
        src="/images/fase1.png"
        alt="Diagrama da Fase 1"
        style={{ width: "100%", maxWidth: "800px", marginBottom: "24px" }}
      />

      {/* FASE 2 */}
      <Paragraph><strong>Fase 2 – Core, VLANs e SDN</strong></Paragraph>
      <img
        src="/images/fase2.png"
        alt="Diagrama da Fase 2"
        style={{ width: "100%", maxWidth: "800px", marginBottom: "24px" }}
      />

      {/* FASE 3 */}
      <Paragraph><strong>Fase 3 – Traceroute e SNMP</strong></Paragraph>
      <img
        src="/images/fase3.png"
        alt="Diagrama da Fase 3"
        style={{ width: "100%", maxWidth: "800px" }}
      />
    </>
  );
}
