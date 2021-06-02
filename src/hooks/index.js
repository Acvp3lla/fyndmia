import { useMemo, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";

function useAutocomplete(client) {
  const [state, setState] = useState({});

  const instance = useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          setState(state);
        },
        getSources() {
          return [
            {
              sourceId: "workers",
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient: client,
                  queries: [
                    {
                      params: {
                        hitsPerPage: 6,
                        highlightPreTag: "<mark>",
                        highlightPostTag: "</mark>"
                      }
                    }
                  ]
                });
              }
            }
          ];
        }
      }),
    [client]
  );

  return [instance, state];
}

export default useAutocomplete;
