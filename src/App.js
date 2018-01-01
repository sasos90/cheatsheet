import React, { Component } from 'react';
import './App.css';
import Group from "./components/Group";
import {ApolloProvider} from "react-apollo";
import {HttpLink, InMemoryCache} from "apollo-client-preset";
import {ApolloClient} from "apollo-client";
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql.brandfolder.com/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {

  renderGroups(groups) {
    return groups.map((g, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <Group groupName={g.groupName} cheats={g.cheats}></Group>
      </div>
    ));
  }

  componentWillMount() {
    client.query({ query: gql`{ viewer {
      apiId
    } }` }).then((res) => {
      console.log(res);
    });
  }

  render() {
    const groups = [];
    const gitCheats = [{
      command: 'git add .',
      desc: 'Add files to stage for commit'
    }, {
      command: 'git reset HEAD',
      desc: 'Unstage all files from commit'
    }];
    groups.push({
      groupName: 'Git',
      cheats: gitCheats
    });

    const linuxCheats = [{
      command: 'rm -rf [filename]',
      desc: 'Remove the file'
    }, {
      command: 'ls -la',
      desc: 'List directory'
    }, {
      command: 'netstat -avtpn',
      desc: 'Check used ports'
    }];
    groups.push({
      groupName: 'Linux terminal',
      cheats: linuxCheats
    });

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="row groups-wrapper">{this.renderGroups(groups)}</div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
