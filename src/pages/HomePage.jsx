import Title from "../components/common/Title";
import Paragraph from "../components/common/Paragraph";
import SubTopic from "../components/common/SubTopic";
import List from "../components/common/List";
import ItemList from "../components/common/ItemList";

export default function HomePage() {
  return (
    <>
      <Title>Projeto Douglas EFC04</Title>
      <Paragraph>
        Página inicial da wiki do projeto do <strong>GRUPO 4</strong>. Os
        tópicos estão dividos nas páginas à esquerda.
      </Paragraph>

      <SubTopic>Membros participantes</SubTopic>
      <List>
        <ItemList>LEONARDO FERRARO GIANFAGNA: 18174490</ItemList>
        <ItemList>MATEUS COLFERAI MISTRO: 23002896</ItemList>
        <ItemList>RAFAEL GONÇALVES MICHIELIN: 23012113</ItemList>
        <ItemList>RENAN NEGRI CECOLIN: 23012651</ItemList>
        <ItemList>SAMUEL ARANTES DO NASCIMENTO PRADO: 23013858</ItemList>
      </List>
    </>
  );
}
