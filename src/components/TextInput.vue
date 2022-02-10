<template>
  <div>
  
      <input type="" name="" v-model="link">
      
      <h1><router-link :to="{ name: 'LinkDetails', params:{id: this.shortLinkGenerated} }">{{this.generated}}</router-link></h1>
      <button @click="generateLink" >Generate</button>

        
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {required, minLength, url} from 'vuelidate/lib/validators';

export default {
setup(){
    return { v$: useVuelidate() }
},
data() {
    return {
        link: 'http://google.com',
        generated:'',
        shortLinkGenerated   :'',
    }
},
components: {

},
validations: {
    link: {
        required,
        minLength: minLength(5),
        //maxLength: maxLength(20),
        url
    
    }
},
methods: {

     async generateLink() {
        let resValidate = await this.v$.link.$validate() ;
      
  
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        let siteUrl = window.location.protocol + "//" + window.location.hostname + '/';
        

        if(resValidate) {
            
            

            for ( let i = 0; i < 5; i++ ) {
                this.shortLinkGenerated += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            

            //si l'url n'existe pas dans le store alors on enregistre celui ci
            if(this.$store.getters.getLinkByUrl(this.link) == null) {
                this.$store.dispatch('addLink', { id: this.shortLinkGenerated, url: this.link, count: 0});
                this.generated = siteUrl + this.shortLinkGenerated;
                this.$toast.open({message:"Lien généré",type:"success"});
            //sinon on affiche l'url généré précédement dans le store
            } else {
                this.generated = siteUrl + this.$store.getters.getLinkByUrl(this.link).id;
                this.$toast.open({message:"Lien déjà existent",type:"warning"});
            }
            
    
            //on reset le lien généré.
            this.shortLinkGenerated = "";
        } else {
            if(this.v$.link.required.$invalid) {
                 this.$toast.open({message:"Le champ est requis",type:"error", position:"bottom"});
            
            } else if (this.v$.link.minLength.$invalid){
                this.$toast.open({message:"le nombre de charactere minimum est de 5",type:"error", position:"bottom"});
            } else if (this.v$.link.url.$invalid) {
                this.$toast.open({message:'un format de type "https://google.com" est attendue',type:"error", position:"bottom"});
            } else {
                this.$toast.open({message:"Une erreur inatendue est survenue",type:"error", position:"bottom"});
            }
        }

        
        
        console.log("res", window.location);

       
    }//end generateLink
}
}
</script>

<style>

</style>