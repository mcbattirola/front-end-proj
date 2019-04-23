import React from "react";
import "../style/navbar.css";

//Stateless Functional Component

//props as argument and remove "this." from props
const Navbar = ({ text }) => {
  return (
    <header className="sc-bZQynM TOhCW">
      <div className="sc-gzVnrw hxUdfc">
        <div className="sc-htoDjs fMhbBb">
          <a className="sc-iwsKbI diOdve">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAzMyAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNjg3NTggMEgzMi4zMTI1QzMyLjY5MiAwIDMzIDAuMzEzNjIyIDMzIDAuNzAwMDIyQzMzIDEuMDg2NDIgMzIuNjkyIDEuNDAwMDQgMzIuMzEyNSAxLjQwMDA0SDAuNjg3NTE1QzAuMzA4MDE4IDEuNDAwMDQgMCAxLjA4NjQyIDAgMC43MDAwMjJDMCAwLjMxMzYyMiAwLjMwODA4MyAwIDAuNjg3NTggMFoiIGZpbGw9IiNBMUExQTEiLz4KPHBhdGggZD0iTTAuNjg3NTggOS44MDAwNUgzMi4zMTI1QzMyLjY5MiA5LjgwMDA1IDMzIDEwLjExMzcgMzMgMTAuNTAwMUMzMyAxMC44ODY1IDMyLjY5MiAxMS4yMDAxIDMyLjMxMjUgMTEuMjAwMUgwLjY4NzUxNUMwLjMwODAxOCAxMS4yMDAxIDAgMTAuODg2NSAwIDEwLjUwMDFDMCAxMC4xMTM3IDAuMzA4MDgzIDkuODAwMDUgMC42ODc1OCA5LjgwMDA1WiIgZmlsbD0iI0ExQTFBMSIvPgo8cGF0aCBkPSJNMC42ODc1OCAxOS42MDAxSDMyLjMxMjVDMzIuNjkyIDE5LjYwMDEgMzMgMTkuOTEzNyAzMyAyMC4zMDAxQzMzIDIwLjY4NjUgMzIuNjkyIDIxLjAwMDEgMzIuMzEyNSAyMS4wMDAxSDAuNjg3NTE1QzAuMzA4MDE4IDIxLjAwMDEgMCAyMC42ODY1IDAgMjAuMzAwMUM2LjEwMzUyZS0wNSAxOS45MTM3IDAuMzA4MDgzIDE5LjYwMDEgMC42ODc1OCAxOS42MDAxWiIgZmlsbD0iI0ExQTFBMSIvPgo8L3N2Zz4="
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NTUuMjggMjQ2LjY4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2YzNmUyZDt9LmNscy0ye2ZpbGw6IzNlODFmNzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkxvZ288L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzMy4yNSwwYTIzLjQ0LDIzLjQ0LDAsMSwwLDIzLjQ0LDIzLjQ0QTIzLjQzLDIzLjQzLDAsMCwwLDMzMy4yNSwwaDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgMCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik05MjAuNzMsMTAzLjVhODUuNTksODUuNTksMCwwLDAtMTMuOTQsMSwyNS4xMiwyNS4xMiwwLDAsMC0xMC42Miw0LjE4LDE5LjMxLDE5LjMxLDAsMCwwLTYuNjIsOXEtMi4yNSw1LjkyLTIuMjYsMTUuMzN2OTcuMnEwLDYuMjctNS4zOSwxMS4zMnQtMTQuNDYsNXEtOS4zOSwwLTE1LjE1LTV0LTUuNzUtMTEuMzJWMTM0LjVxMC0zMy4wOSwxNy43Ny01MXQ1Ni40Mi0xNy45NHExNy43NiwwLDI3LDd0Ny4xNSwxOS41cS0xLjA1LDYuMjctNC41Myw4Ljg4YTE2LjY4LDE2LjY4LDAsMCwxLTguMzYsMy4xNCw1Miw1MiwwLDAsMS0xMC40NCwwYy0zLjcyLS4zNS03LjMyLS41Mi0xMC44LS41MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMSAwKSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5Ljg1LDIwLjI2cS05LjA2LDAtMTQuNDQsNS4wNlQwLDM5LjA3QTE3LjA2LDE3LjA2LDAsMCwwLDUuNDEsNTIuMTNxNS40LDUuMDYsMTQuNDUsNUg2MVYyMzAuMjZxMCw2LjI3LDUuNTcsMTEuMzJ0MTUuMzIsNXE5LjA2LDAsMTQuNDYtNXQ1LjQtMTEuMzJWNTcuMThoNDUuNjJxMTAuMDksMCwxNS4xNS01YTE3LjYzLDE3LjYzLDAsMCwwLDUuMDUtMTMuMDZxMC04LjctNS4wNS0xMy43NXQtMTUuMTYtNS4wNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgMCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTAuMTYsMTAzLjVxNS4yMiwwLDEwLjguNTNhNTIsNTIsMCwwLDAsMTAuNDQsMCwxNi41OSwxNi41OSwwLDAsMCw4LjM2LTMuMTRxMy40OC0yLjYxLDQuNTMtOC44OCwyLjA4LTEyLjU0LTcuMTQtMTkuNXQtMjctN3EtMzguNjUsMC01Ni40MiwxNy45NHQtMTcuNzYsNTF2OTUuODFxMCw2LjI3LDUuNzQsMTEuMzJ0MTUuMTUsNXE5LjA2LDAsMTQuNDYtNXQ1LjQtMTEuMzJWMTMzLjExcTAtOS40MSwyLjI3LTE1LjMzYTE5LjI0LDE5LjI0LDAsMCwxLDYuNjItOSwyNC44MiwyNC44MiwwLDAsMSwxMC42Mi00LjE4LDg1LjU1LDg1LjU1LDAsMCwxLDEzLjkzLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgMCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01ODkuMzIsMTcyLjExcTAsMTkuMTctMTAuNjIsMjcuODd0LTI2LDguN3EtMTguMTEsMC0yOS4wOC0xMC43OXQtMTEtMjkuMjZWMTQzLjI2cTAtMTguNDcsMTEtMjkuMjZ0MjkuMDgtMTAuNzlxMTQuNjQsMCwyNS4yNSw4LjUzdDExLjMyLDI3djMzLjM3Wk02MjQuMTUsOS4yNnEtNS41OC01LjA1LTE1LjMyLTUtOC43LDAtMTQuMTEsNXQtNS40LDExLjMyVjg0LjM1bC0yLjQzLjM1QTYwLjg2LDYwLjg2LDAsMCwwLDU2OSw3MC45NGE1My43NCw1My43NCwwLDAsMC0yNS4yNS01Ljc1cS0xOS4xNiwwLTMyLjc0LDYuMjdhNjAuOTEsNjAuOTEsMCwwLDAtMjIuMjksMTcuMDcsNzEuMzUsNzEuMzUsMCwwLDAtMTIuODksMjUuMjUsMTEwLjc0LDExMC43NCwwLDAsMC00LjE3LDMwLjgydjIyLjY2YTkzLjExLDkzLjExLDAsMCwwLDUsMzAuODIsNzAuNTksNzAuNTksMCwwLDAsMTUuMTUsMjUuMjVBNzEuNDQsNzEuNDQsMCwwLDAsNTE3LDI0MC40cTE1LjE1LDYuMjcsMzUuNyw2LjI3LDE5LjE3LDAsMzMuNjEtNS43NUE2NC4yMyw2NC4yMywwLDAsMCw2MjQuODEsMjAxYTkxLjI4LDkxLjI4LDAsMCwwLDQuODctMzAuM1YyMC42MnEwLTYuMjctNS41Ny0xMS4zMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgMCkiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03MTQuMjcsMTA5LjI2cTkuMjItOS45MywyNC45MS05LjkydDI1LjYsOC4zNXE5LjkxLDguMzcsOS45MiwyMi42NHY1LjIzaC03MXExLjQxLTE2LjM4LDEwLjYyLTI2LjNabTcxLjkyLDU2LjZxMTQuNjQsMCwyMC45LTYuNjJ0Ni4zMi0yM2E3Ny45LDc3LjksMCwwLDAtNC4xOC0yNC43M0E2NS42Myw2NS42MywwLDAsMCw3NzMuMzEsNzJxLTEzLjktNi40NS0zMy43OC02LjQ1YTc3LjY1LDc3LjY1LDAsMCwwLTMwLjY1LDUuOTIsNzUuMjYsNzUuMjYsMCwwLDAtMjQsMTYsNzQuMjIsNzQuMjIsMCwwLDAtMjEuNTksNTIuNTlWMTc3YTYzLjExLDYzLjExLDAsMCwwLDUuOTMsMjcsNjcuMTEsNjcuMTEsMCwwLDAsMTYuNTQsMjIuMTIsODEuMzgsODEuMzgsMCwwLDAsMjUuMjQsMTUsOTAuMTIsOTAuMTIsMCwwLDAsMzIuMzksNS41OCw5NS40OCw5NS40OCwwLDAsMCwyNC4yMS0zLDg4LjI1LDg4LjI1LDAsMCwwLDE5LjY4LTcuNDksNDcuMDYsNDcuMDYsMCwwLDAsMTMuMjMtMTAuMXE0Ljg5LTUuNTgsNC44OC0xMS4xNWExNi42NSwxNi42NSwwLDAsMC00LjE4LTEwLjc5cS0zLjgzLTQuMTktMTAuOC00LjE4YTE3LjgxLDE3LjgxLDAsMCwwLTguMzUsMi40M3EtNC41MywyLjQ1LTkuNDEsNC44OGE0OC4wOCw0OC4wOCwwLDAsMS0xMi4zNiwzLjMxLDExMywxMTMsMCwwLDEtMTcuMjQsMS4yMnEtMTguODEsMC0yOS4wOC0xMC4xdC0xMC4yOC0yNi44MnYtOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDEgMCkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNDcuNzEsNzAuNTlxLTUuNC01LTE0LjQ2LTUtOS40LDAtMTUuMTUsNXQtNS42OSwxMS4zMlYyMzAuMjZxMCw2LjI3LDUuNzQsMTEuMzJ0MTUuMTUsNXE5LjA2LDAsMTQuNDYtNXQ1LjM0LTExLjMyVjExMi40MmEzNi4yNSwzNi4yNSwwLDAsMCwxNy40Niw0LjIzYzAtLjA5LDExLjU5LTEsMTEuNTktMTEuODNBMTEuNTksMTEuNTksMCwwLDAsMzcxLDkzLjI2Yy05LjcxLS44NC0xMy45Mi03LjQ1LTE4LjMtMTQuNTlhMTYuNDUsMTYuNDUsMCwwLDAtNS04WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMSAwKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTM4MS42Niw5M2M4LjY1LDQuNzEsOS4zOCwxNi44Ny43OCwyMy45MmE1MC4xOCw1MC4xOCwwLDAsMCwxNS42OS00Ljd2MTE4cTAsNi4yNyw1Ljc1LDExLjMydDE1LjE0LDVxOS4wNiwwLDE0LjQ2LTV0NS40LTExLjMyVjgxLjkxcTAtNi4yNy01LjQtMTEuMzJ0LTE0LjQ2LTVxLTkuMzksMC0xNS4xNCw1YTE2LDE2LDAsMCwwLTUuNDcsOC40OGMtNS44NSwxMS4xNS0xMSwxMy4yOC0xNi43OCwxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMSAwKSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTM5NS41OCwyMy40NEEyMy40NSwyMy40NSwwLDEsMCw0MTksMGgwYTIzLjQzLDIzLjQzLDAsMCwwLTIzLjQ0LDIzLjQ0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMSAwKSIvPjwvc3ZnPg=="
              alt="Triider"
              className="sc-dnqmqq bsynnM"
            />
          </a>
        </div>
        <div className="sc-gZMcBi bFuCXo">
          <div className="sc-VigVT dbjulF">
            <div>
              <a href="/" to="/" className="sc-cSHVUG faOjth">
                Início
              </a>
            </div>
            <div>
              <a
                href="/catalogo-de-servicos"
                to="/catalogo-de-servicos"
                className="sc-cSHVUG iskNhI"
              >
                Catálogo de serviços
              </a>
            </div>
            <div>
              <a href="/u/#/" to="/" className="sc-cSHVUG iskNhI">
                Meus Orçamentos
              </a>
            </div>
            <div>
              <a
                href="/u/#/mensagens"
                to="/mensagens"
                className="sc-cSHVUG iskNhI"
              >
                Mensagens
              </a>
            </div>
            <div>
              <a
                href="/central-de-ajuda"
                to="/central-de-ajuda"
                className="sc-cSHVUG iskNhI"
              >
                Ajuda
              </a>
            </div>
          </div>
          <div className="sc-gqjmRU efqTkM">
            <img
              src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2098101340304335&amp;width=640&amp;ext=1558473363&amp;hash=AeT7lY-HlHTCdiG3"
              alt="Foto de Perfil"
              className="sc-kAzzGY gePSxh"
            />
            <span>Matheus</span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNyIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgNyA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMy42MzcyNSA0LjkzMDMyTDYuOTcwNjcgMC4yNTI5MDNDNy4wMDU4NCAwLjIwMzM4NyA3LjAwOTUgMC4xMzkxOTQgNi45ODEgMC4wODYyOTAzQzYuOTUyMTcgMC4wMzMyMjU4IDYuODk1NSAtNC41Njc4MWUtMDkgNi44MzM1IC03LjI3Nzk4ZS0wOUwwLjE2NjY3MSAtMi45ODY5NGUtMDdDMC4xMDQ2NjkgLTMuMDE0MDRlLTA3IDAuMDQ3ODM0OSAwLjAzMzIyNTUgMC4wMTkwMDEgMC4wODYyOUMwLjAwNjMzMzgyIDAuMTA5ODM4IC01LjkyOTI0ZS0wOSAwLjEzNTY0NSAtNy4wNTAyMmUtMDkgMC4xNjEyOUMtOC40NTMyMmUtMDkgMC4xOTMzODcgMC4wMTAwMDA3IDAuMjI1MzIyIDAuMDI5NTAxIDAuMjUyOTAzTDMuMzYyOTEgNC45MzAzMkMzLjM5NDA4IDQuOTc0MDMgMy40NDUyNSA1IDMuNTAwMDggNUMzLjU1NDkyIDUgMy42MDYwOSA0Ljk3Mzg3IDMuNjM3MjUgNC45MzAzMloiIGZpbGw9IiM1NjU2NTYiLz4KPC9zdmc+Cg=="
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
