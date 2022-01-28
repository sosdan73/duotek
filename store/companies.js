export const state = () => ({
    companies: [],
    meta: {}
})

export const mutations = {
    setCompanies(state, companies) {
        state.companies = companies;
    },
    setMeta(state, meta) {
        state.meta = meta
    },
}

export const actions = {
    async fetch({ commit, rootState }) {
        try {
            const link = rootState.queries.link;
            const companies = await this.$axios.get(link);
            commit('setCompanies', companies.data.data);
            commit('setMeta', companies.data.meta);
        } catch (error) {
            console.log(error);
        }
    }
}

export const getters = {
    companies: state => state.companies,
    meta: state => state.meta
}