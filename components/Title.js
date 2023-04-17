import { StyleSheet, Text } from "react-native";

function Title({ children }) {
    return <Text style={styles.title}> {children} </Text>
}

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ddb52f',
      textAlign: 'center',
      borderColor: '#ddb52f',
      borderWidth: 2,
      padding: 12,
    }
})

export default Title;