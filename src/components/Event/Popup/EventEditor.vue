<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Title"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Date"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Category"
              required
            ></v-text-field>
          </v-col>

          <v-col 
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Participants"
              required
            ></v-text-field>
          </v-col>
          <v-col 
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Description"
              required
            ></v-text-field>
          </v-col>
          <!-- <v-col
            cols="12"
            sm="6"
          >
            <v-select
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age*"
              required
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-autocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
              multiple
            ></v-autocomplete>
          </v-col> -->
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>