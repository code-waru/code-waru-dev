var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  beforeCreate: function (){},

  created: function (){},

  beforeMount: function (){},

  mounted: function(){
    
    Promise.resolve()
      .then(()=>{
        app.step1();
      })
      .then(()=>{
        app.step2();
      })
      .then(()=>{
        app.step3();
      })
      .then(()=>{
        app.step4();
      })
      .catch();

  },
  beforeUpdate: function (){},
  
  updated: function (){},

  activated: function (){},

  deactivated: function (){},

  beforeDestroy: function (){},

  destroyed: function (){},

  methods: {
    step1:function(){
      console.log('STEP1');
    },
    step2:function(){
      
      gtag('event', 'action', {
        'event_category': 'category',
        'event_label': 'label'
      });
    },
    step3:function(){
      console.log('STEP3');
    },
    step4:function(){
      console.log('STEP4');
      
    },
  }
});

