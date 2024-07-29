import { useDisableIntrospection } from '@envelop/disable-introspection';
import { MeshPlugin } from '@graphql-mesh/types';

const plugins: MeshPlugin<{}>[] = [useDisableIntrospection()];

export default plugins;
