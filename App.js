import * as React from 'react';
import { 
  Appbar, 
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
  Provider as PaperProvider,
  DefaultTheme,
  List,
  Divider,
 } from 'react-native-paper';
import { View } from 'react-native';


const HomeComponent=() => {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return(

    <View>
    <Appbar.Header>
      <Appbar.Content title="Header" subtitle="Subtitle" />
      {/* <Action.Action icon="dots-vertical" onPress={this._handleMore} /> */}
    </Appbar.Header>

    <Card>
<Card.Title 
title="Card Title" 
subtitle="Card Subtitle" 
left={LeftContent} 
/>

<Card.Content>
</Card.Content>
<Card.Cover source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdr18OjYKxxBxfzNyPpZxHxIDBmGuqg9QNw&usqp=CAU",
          }}
        />
{/* <Card.Cover source={{ }} /> */}
<Card.Actions>
  <Button>Cancel</Button>
  <Button>Ok</Button>
</Card.Actions>
</Card>

<Divider></Divider>

<List.Section>
    <List.Item title="More children take turns to live with each parent in post-divorce arrangements"></List.Item>
  </List.Section>
  <Divider></Divider>
    <List.Section>
      <List.Item title="Chinese tennis star Peng Shuai tells IOC president she is safe during video call"></List.Item>
    </List.Section>
  <Divider></Divider>

  </View>
  )
}

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'red',
      accent: 'green',
      text: 'brown',
      background: 'blue',
      surface: 'yellow',
      disabled: 'grey',
      font: 'sans-serif-medium',
    },
  };

    return (
      <PaperProvider theme={theme}>
      <HomeComponent />
      </PaperProvider>
    );
}