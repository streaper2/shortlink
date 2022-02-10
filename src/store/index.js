import { createStore } from 'vuex'

export default createStore({
  state: {
    links: JSON.parse(localStorage.getItem('links')) || [],
  },
  mutations: {
    ADD_LINK(state, link) {
      //on sauvegarde l'etat du link
      state.links.push(link);

      localStorage.setItem('links', JSON.stringify(state.links));

    },
    VIEW_LINK(state, link) {
      state.links.push(link);
    }
  },
  actions: {
    addLink({ commit }, link) {
      commit('ADD_LINK', link);
    },
    
  },
  getters:{
    allLinks(state){ 
      console.log(state.links);
      return state.links;
    },
    getLinkByUrl: state => url => {
     
        return state.links.find(link => link.url === url);
      
    },
    getLinkById: state => id => {
        console.log(state.links.find(link => link.id === id));
        return state.links.find(link => link.id === id);
      
    }           
  },
  modules: {
  }
})
