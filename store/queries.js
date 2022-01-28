export const state = () => ({
    query: '',
    industry: '',
    specialization: '',
    page: 1,
    link: 'http://api-test.duotek.ru/companies'
})

export const mutations = {
    setQuery(state, query) {
        state.query = query;
    },
    setIndustry(state, industry) {
        state.industry = industry
    },
    setSpecialization(state, specialization) {
        state.specialization = specialization
    },
    setPage(state, page) {
        state.page = page
    },
    setLink(state) {
        const query = {};
        if (!state.query &&
            !state.industry &&
            !state.specialization &&
            state.page == 1) {
            state.link = 'http://api-test.duotek.ru/companies';
            return
        }
        state.link += '?'
        if (state.query) {
            query['query'] = state.query;
            state.link += 'search=' + state.query + '&'
        }
        if (state.industry) {
            query['industry'] = state.industry;
            state.link += 'industries=' + state.industry + '&'
        }
        if (state.specialization) {
            query['specialization'] = state.specialization;
            state.link += 'specializations=' + state.specialization + '&'
        }
        if (state.page != 1) {
            query['page'] = state.page;
            state.link += 'page=' + state.page + '&'
        }
        state.link = state.link.substring(0, state.link.length - 1);
        this.$router.replace({query}).catch(()=>{});
    }
}

export const getters = {
    query: state => state.query,
    industry: state => state.industry,
    specialization: state => state.specialization,
    page: state => state.page,
    getCompaniesLink: state => state.link
}