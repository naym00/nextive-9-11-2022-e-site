export default{
    props: ['NavBarDetails'],
    computed:{
        prepareAnchorTags(){
          let preparedNavbar = '';

          this.NavBarDetails.navbars.forEach(anchorDetails => {
            let hoverEfect = `onMouseOver="this.style.color='${anchorDetails.onMouseOver}'" onMouseOut="this.style.color='${anchorDetails.onMouseOut}'"`;

            preparedNavbar += anchorDetails.active ? `<div><a class="navbar-a" style="${anchorDetails.style+this.NavBarDetails.activeStyle}" ${hoverEfect} href="/${anchorDetails.path}" >${anchorDetails.name}</a></div>` : `<div><a class="navbar-a" style="${anchorDetails.style}" ${hoverEfect} href="/${anchorDetails.path}" >${anchorDetails.name}</a></div>`;
          });
          return preparedNavbar;
        }
      }
}