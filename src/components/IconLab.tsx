import { useState } from "react";
import type { IconProps } from "../types";

interface IconModule {
  [key: string]: React.ComponentType<IconProps>;
}

const iconModules = import.meta.glob<IconModule>(
  ["../icons/**/*.tsx", "!../icons/**/*.test.tsx"],
  { eager: true },
);

const iconEntries = Object.entries(iconModules).map(([path, mod]) => {
  const fileName = path.replace("../icons/", "").replace(".tsx", "");
  const componentName = fileName.split("/").pop() || fileName;
  const Component = mod[componentName];
  const name = fileName.replace("/", " / ");
  return { name, Component };
}).filter(({ Component }) => Component != null);

export function IconLab() {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(32);
  const [color, setColor] = useState("currentColor");

  const filtered = iconEntries.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui" }}>
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: 4,
            width: 300,
          }}
        />
        <label>
          Size:
          <input
            type="range"
            min="16"
            max="128"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{ marginLeft: "0.5rem", width: 150 }}
          />
          {size}px
        </label>
        <label>
          Color:
          <input
            type="color"
            value={color === "currentColor" ? "#000000" : color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginLeft: "0.5rem", width: 40, height: 30 }}
          />
        </label>
        <span style={{ color: "#666" }}>
          {filtered.length} / {iconEntries.length} icons
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {filtered.map(({ name, Component }) => (
          <div
            key={name}
            className="hover:shadow-lg"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem",
              border: "1px solid #eee",
              borderRadius: 8,
              background: "#fafafa",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <div
              style={{
                width: size,
                height: size,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.5rem",
                color,
              }}
            >
              <Component size={size} color={color} />
            </div>
            <code
              style={{
                fontSize: "0.7rem",
                color: "#666",
                textAlign: "center",
                wordBreak: "break-all",
              }}
            >
              {name}
            </code>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#999", marginTop: "2rem" }}>
          No icons found matching "{search}"
        </p>
      )}
    </div>
  );
}
