<!-- src/components/ComingSoon.vue -->
<template>
    <div class="coming-soon">
      <div class="container">
        <h2 class="coming-soon__title">Данная страница пока находится в разработке</h2>
        <p class="coming-soon__text">
          Скоро здесь появится полезная информация. Спасибо за понимание!
        </p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .coming-soon {
    /* min-height: 747px; */
    /* min-height: calc(100vh - 243px); */
    height: 100%;
    padding: 4rem 0;
    text-align: center;
  }
  
  .coming-soon__title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .coming-soon__text {
    font-size: 1.1rem;
    color: #666;
  }
  </style>