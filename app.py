import streamlit as st
import streamlit.components.v1 as components
import os

# Configuration de la page Streamlit pour qu'elle prenne tout l'espace disponible
st.set_page_config(layout="wide", page_title="Instant Transfert", initial_sidebar_state="collapsed")

# Masquer complètement l'interface de base de Streamlit et les marges
hide_st_style = """
<style>
#MainMenu {visibility: hidden;}
footer {visibility: hidden;}
header {visibility: hidden;}
.block-container {
    padding-top: 0rem !important; 
    padding-bottom: 0rem !important; 
    padding-left: 0rem !important; 
    padding-right: 0rem !important; 
    max-width: 100% !important;
}
iframe {border: none; width: 100%;}
body {overflow: hidden;}
</style>
"""
st.markdown(hide_st_style, unsafe_allow_html=True)

try:
    # Lire le code source des fichiers HTML / CSS / JS du MVP
    with open("index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    with open("style.css", "r", encoding="utf-8") as f:
        css_content = f.read()
    with open("app.js", "r", encoding="utf-8") as f:
        js_content = f.read()

    # Injecter le CSS au lieu du système de fichier local
    html_content = html_content.replace('<link rel="stylesheet" href="style.css">', f"<style>{css_content}</style>")
    
    # Injecter le Javascript au lieu du système de fichier local
    html_content = html_content.replace('<script src="app.js?v=6"></script>', f"<script>{js_content}</script>")
    html_content = html_content.replace('<script src="app.js?v=5"></script>', f"<script>{js_content}</script>")
    html_content = html_content.replace('<script src="app.js?v=4"></script>', f"<script>{js_content}</script>")
    html_content = html_content.replace('<script src="app.js?v=3"></script>', f"<script>{js_content}</script>")
    html_content = html_content.replace('<script src="app.js"></script>', f"<script>{js_content}</script>")

    # Déploiement dans Streamlit !
    components.html(html_content, height=1200, scrolling=True)

except FileNotFoundError:
    st.error("Les fichiers web dynamiques n'ont pas été trouvés. Vérifiez le dossier de déploiement GitHub.")
