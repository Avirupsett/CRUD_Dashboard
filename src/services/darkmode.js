export default function DarkMode(mode) {
    if (mode === "dark") {
        document.body.style.backgroundColor = "#2a2f42"
        document.documentElement.style.setProperty("--primary-color", "#353a50")
        document.documentElement.style.setProperty("--secondary-color", "#2a2f42")
        document.documentElement.style.setProperty("--third-color", "#2a2f42")
        document.documentElement.style.setProperty("--box-shadow-color", "#232838")
        document.documentElement.style.setProperty("--disabled-color", "#f6f6f615")
        document.documentElement.style.setProperty("--blue-color", "#49b2ee")
        document.documentElement.style.setProperty("--pink-color", "#f444cb")
        document.documentElement.style.setProperty("--text-color", "#f6f6f6")
        localStorage.setItem("DarkMode", "on")
    }
    else {
        document.body.style.backgroundColor = "#f6f8fa"
        document.documentElement.style.setProperty("--primary-color", "#ffffff")
        document.documentElement.style.setProperty("--secondary-color", "#f6f8fa")
        document.documentElement.style.setProperty("--third-color", "#f6f6f6")
        document.documentElement.style.setProperty("--box-shadow-color", "#D9D9D9")
        document.documentElement.style.setProperty("--disabled-color", "#f6f6f6")
        document.documentElement.style.setProperty("--blue-color", "#49b2ee")
        document.documentElement.style.setProperty("--pink-color", "#f444cb")
        document.documentElement.style.setProperty("--text-color", "#647589")
        localStorage.setItem("DarkMode", "off")
    }
}