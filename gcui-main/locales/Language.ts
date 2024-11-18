const Language = (nameSpace = "common") =>{
	const result = require(`../locales/${process.env.NEXT_PUBLIC_LANGUAGE}/${nameSpace}.ts`)
	return result.default;
}
export default Language;