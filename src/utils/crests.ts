const crestModules = import.meta.glob<string>('../services/data/crests/*.svg', {
    query: '?url',
    import: 'default',
    eager: true,
});

const crestMap: Record<string, string> = {};

for (const path in crestModules) {
    const match = path.match(/(\d+)\.svg$/);
    if (match) {
        crestMap[match[1]] = crestModules[path];
    }
}

export function getCrestUrl(clubId: string): string | undefined {
    return crestMap[clubId];
}
