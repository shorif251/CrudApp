export default function FormField({
  name,
  type = "text",
  onChange,
  placeholder="",
  value = "",
  className=""
}) {
  return (
    <div>
      <input
        type={type}
        className={`${className} rounded px-4 py-2 ring-1 ring-blue-600 hover:ring-green-700 bg-slate-600 my-3 text-slate-50 outline-none`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
