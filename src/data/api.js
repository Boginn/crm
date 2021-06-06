import axios from 'axios'

const lokeAPI = axios.create({
    baseURL: 'http://159.65.88.14/api/loke',
    params: {
        projectId: 'fjp-2021', // Ath, þesssu þarftu að breyta í það projectId sem þú villt nota.
        
    }
})

//#region Criminals
export default {
    // Sækir lista af öllum glæpamönnum
    getCriminals() {
        return lokeAPI.get('/criminals');
    },
    // Sækir eitt stak af glæpamanni eftir id
    getCriminalById(id) {
        return lokeAPI.get(`criminals/${id}`);
    },
    // Sendir inn og vistar einn glæpamann
    postCriminal(criminal) {
        return lokeAPI.post('/criminals', criminal);
    },
    // Sendir inn eintak af glæpamanni reynir að flétta honum upp eftir id og breyta gögnum sem á við
    putCriminal(criminal) {
        return lokeAPI.put('/criminals', criminal);
    },
    // Sendir inn del skipun á id fyrir glæpamann, sem þýðir að þetta fléttir upp glæmanni eftir id ef APIinn finnur id-ið þá eyðir hann glæpamanninum.
    delCriminal(id) {
        return lokeAPI.delete(`/criminals/${id}`);
    },

    postPhoto(formData) {
        return lokeAPI.post('upload', formData);
    },
    getNotes() {
        return lokeAPI.get('/notes');
    },
    postNote(descripton, crimeId, date) {
        
        let note = {
            note: descripton,
            crimeId: crimeId,
            date: date
        }

        return lokeAPI.post('/notes', note)
    }
}
//#endregion,