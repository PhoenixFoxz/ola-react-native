import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "space-around",
  },

  cabecalho: {
    backgroundColor: "darkblue",
    flex: 1,
  },

  conteudo: {
    backgroundColor: "blue",
    flex: 6,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 10,
  },

  titulo: {
    textAlign: "center",
    paddingBottom: 5,
    fontWeight: "700",
  },

  tituloCabecalho: {
    marginBottom: "auto",
    marginTop: "auto",
    textAlign: "center",
    paddingBottom: 5,
    fontWeight: "900",
    fontSize: 20,
  },

  tituloConteudo: {
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 15,
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
  },

  texto: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  rodape: {
    backgroundColor: "darkblue",
    flex: 1,
  },
});

export default estilos;
