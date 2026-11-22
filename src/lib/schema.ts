import type { Graph, Thing, Person, WebSite } from 'schema-dts';
export const SITE_NAME = 'Azriel De Ryzerine';
export const SITE_DESCRIPTION = 'Azriel De Ryzerine is a musician, artisan and producer';
export const SITE_LANG = 'en';
const person = {
    name: SITE_NAME,
    image: '/ryzerine.jpg',
    jobTitle: 'Musician, Digital Artisan, and Producer',
    knowsAbout: ['React', 'Astro', 'UI/UX Design', 'Music Production', 'Music'],
    sameAs: [
        'https://github.com/ryzerine',
        'https://youtube.com/@ryzerine',
        'https://pinterest.com/ryzerine',
        'https://medium.com/@ryzerine',
    ],
};
export function getSchemaIds(site: URL) {
    return {
        website: new URL('/#website', site).toString(),
        person: new URL('/#person', site).toString(),
    };
}
export function buildSchemaGraph(site: URL, extra?: Thing | Thing[]): Graph {
    const ids = getSchemaIds(site);
    const siteURL = site.toString();
    const webSite: WebSite = {
        '@type': 'WebSite',
        '@id': ids.website,
        url: siteURL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: SITE_LANG,
        publisher: { '@id': ids.person },
    };
    const personNode: Person = {
        '@type': 'Person',
        '@id': ids.person,
        name: person.name,
        url: siteURL,
        image: new URL(person.image, site).toString(),
        description: SITE_DESCRIPTION,
        jobTitle: person.jobTitle,
        knowsAbout: person.knowsAbout,
        sameAs: person.sameAs,
    };
    return {
        '@context': 'https://schema.org',
        '@graph': [
            webSite,
            personNode,
            ...(Array.isArray(extra) ? extra : extra ? [extra] : []),
        ],
    };
}
export function serializeSchema(graph: Graph): string {
    return JSON.stringify(graph).replace(/</g, '\\u003c');
}