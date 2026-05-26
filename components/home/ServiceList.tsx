import { Check, X } from "lucide-react";

export default function ServiceList({
  title,
  items,
  active,
}: {
  title: string;
  items: string[];
  active: boolean;
}) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-[#C87056]">{title}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 ${active ? "text-[#333333]/74" : "text-[#333333]/38"
              }`}
          >
            {active ? (
              <Check className="mt-1 text-[#C87056]" size={16} />
            ) : (
              <X className="mt-1" size={16} />
            )}
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
