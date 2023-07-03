import { ExternalContent } from '../model/external-content.js';
import { Config } from '../config.js';
import { AdapterPair } from '../adapter/adapter-pair.js';
import { Adapter } from '../adapter/adapter.js';
import { ImportableContents } from '../model/importable-contents.js';
import { Task } from '../pipe/task.js';

/**
 * Aggregator task is responsible to process the content collected from source system,
 * and transform it into ImportableContents
 */
export interface Aggregator extends Task<ExternalContent, ImportableContents> {
  initialize(
    config: Config,
    adapters: AdapterPair<Adapter, Adapter>,
  ): Promise<void>;

  run(externalContent: ExternalContent): Promise<ImportableContents>;
}
