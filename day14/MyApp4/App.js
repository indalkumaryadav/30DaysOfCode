import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import axios from 'axios';

function HomeScreen({navigation}) {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users/')
      .then(res => setData(res.data));
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      {data.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <Card style={{marginTop: 10}}>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Title>Card title</Title>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
              <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            </Card>
          </TouchableOpacity>
        );
      })}
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details', {name: 'indal'})}
      />
    </ScrollView>
  );
}
function LoginScreen({navigation}) {
  const image = {uri: 'https://source.unsplash.com/random'};
  return (
    <>
      <ImageBackground
        source={image}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <TextInput label="Email" style={{marginTop: 10}} />
        <TextInput label="Email" style={{marginTop: 10}} />
        <Button
          style={{marginTop: 10}}
          title="Login"
          onPress={() => {
            navigation.push('Home', {name: 'indal'});
          }}
        />
      </ImageBackground>
    </>
  );
}

function DetailsScreen({navigation, route}) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '005007002',
      title: 'Third Item',
    },
    {
      id: '00572',
      title: 'Third Item',
    },
    {
      id: '572120',
      title: 'Third Item',
    },
    {
      id: '512172',
      title: 'Third Item',
    },
    {
      id: '576662',
      title: 'Third Item',
    },
    {
      id: '579992',
      title: 'Third Item',
    },
    {
      id: '56672',
      title: 'Third Item',
    },
    {
      id: '57552',
      title: 'Third Item',
    },
    {
      id: '510',
      title: 'Third Item',
    },
    {
      id: '5720',
      title: 'Third Item',
    },
    {
      id: '572200',
      title: 'Third Item',
    },
    {
      id: '5722323232323232',
      title: 'Third Item',
    },
    {
      id: '57223232',
      title: 'Third Item',
    },
    {
      id: '57223232',
      title: 'Third Item',
    },
    {
      id: '57211',
      title: 'Third Item',
    },
    {
      id: '57233',
      title: 'Third Item',
    },
    {
      id: '572234',
      title: 'Third Item',
    },
  ];
  const Item = ({title}) => (
    <View
      style={{
        height: 100,
        marginTop: 10,
        marginRight: 20,
        backgroundColor: 'red',
      }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <FlatList
      data={DATA}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerLeft: null}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
