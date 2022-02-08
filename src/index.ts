import * as fs from 'fs';
import YAML from 'yaml';
import jsonPath from 'jsonpath';


const main = async () => {
  const yamlContent = await fs.promises.readFile('config/example-zowe.yaml', 'utf-8');
  const jsonConfig = YAML.parse(yamlContent);
  const zssPort = jsonPath.value(jsonConfig, '$.components.zss.port');
  const zssEnabled = jsonPath.value(jsonConfig, '$.components.zss.enabled');
  console.log(zssPort, zssEnabled);
}

main().catch(console.log);
