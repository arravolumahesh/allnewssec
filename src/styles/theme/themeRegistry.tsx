"use client";
import { ReactNode, useState } from "react";
import createCache, { Options } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import theme from "@theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export interface ThemeRegistryProps {
  children: ReactNode;
  options?: Options;
}

const ThemeRegistry = (props: ThemeRegistryProps) => {
  const { children, options = { key: "mui" } } = props;
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      if (inserted.length === 0) {
        return [];
      } else {
        const prevInserted = inserted;
        inserted = [];
        return prevInserted;
      }
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const { prepend } = options;
    const names = flush();
    if (names.length === 0) {
      return;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion-css={`${cache.key} ${names.join(" ")} `}
        dangerouslySetInnerHTML={{
          __html: prepend ? `@layer emotion {${styles}}` : styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default ThemeRegistry;
