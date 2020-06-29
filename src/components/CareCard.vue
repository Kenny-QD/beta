<template>
<div>
  <b-card class="info-card"
    no-body
    style="max-width: 20rem;
    max-width: 20rem;
    border:none;
    right:50px;"
    img-src="https://www.kindercare.com/-/media/kindercare/heros/summer_01_1220x450.jpg?h=473&la=en&w=1229&hash=0341F72AC869A9FE7683B11EB20BD57FDAA87FA9"
    img-alt="Image"
  >
    <template v-slot:header>
    </template>

    <b-card-body>
      <b-card-title>Care Center</b-card-title>
      <b-card-text>
          1234 fake st.
          Addresserous Citious
          Zippy dippity
      </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item>Contactious</b-list-group-item>
      <b-list-group-item>Phone: (800)-471-2930</b-list-group-item>
    </b-list-group>

    <b-card-body>
      <a href="#" class="card-link">Email</a>
    </b-card-body>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'CareCard',
};
</script>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.info-card {
    position: absolute;
}

.card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.00);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0);
}
</style>
