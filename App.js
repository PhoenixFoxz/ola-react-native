import estilos from "./src/stylesheets/estilos";

import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça!");
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text style={estilos.tituloCabecalho}>
            Jornada Humana: Reflexões e Desafios
          </Text>
        </View>
        <View style={estilos.conteudo}>
          <Text style={estilos.tituloConteudo}>
            Reflexões sobre a História e o Futuro da Humanidade
          </Text>
          <Text style={estilos.texto}>
            Na vastidão do universo, a Terra surge como um oásis de vida. A
            história humana é uma narrativa complexa, marcada por triunfos e
            tragédias. Culturas diversas se entrelaçam, moldando a experiência
            humana. Porém, essa história também é marcada por conflitos e
            injustiças. Momentos de grandeza e heroísmo inspiram a busca por um
            mundo melhor. Enfrentamos desafios globais que exigem cooperação e
            solidariedade. Somos todos habitantes deste pequeno planeta azul,
            compartilhando uma jornada comum. Apesar das diferenças, somos parte
            da mesma família humana. Devemos aprender com o passado para
            construir um futuro sustentável. Que possamos abraçar essa conexão e
            trabalhar juntos.
          </Text>
          <Text style={estilos.texto}>
            Cada descoberta e invenção moldou o curso da humanidade,
            impulsionando-a em direção a um futuro incerto, mas cheio de
            promessas. As adversidades nos desafiam a crescer e nos tornar mais
            resilientes. A história é um lembrete de nossa capacidade de superar
            obstáculos. A busca pela igualdade e justiça é uma constante na
            trajetória humana. Nosso planeta é um tesouro precioso que devemos
            proteger e preservar. Unidos, podemos criar um mundo onde todas as
            pessoas tenham oportunidades iguais. Que nossa jornada coletiva seja
            marcada por compaixão e progresso.
          </Text>
        </View>
        <View style={estilos.rodape}>
          <Button title="Toca aqui!!!" onPress={vai} />
          <Text style={estilos.titulo}>
            Aplicação desenvolvida por Orangotando Asiático © 2024
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
