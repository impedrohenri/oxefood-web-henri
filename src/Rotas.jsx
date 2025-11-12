import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListCliente from "./views/cliente/ListCliente";
import ListEntregador from "./views/entregador/ListEntregador";
import ListProdutos from "./views/produto/ListProdutos";
import FormCategoriaProduto from "./views/categoriaProduto/FormCategoriaProduto";
import ListCategoriaProduto from "./views/categoriaProduto/ListCategoriaProduto";
import FormEndereco from "./views/cliente/endereco/FormEndereco";
import FormCidade from "./views/cidade/FormCidade";
import ListCidade from "./views/cidade/ListCidade";
import FormLogin from "./views/login/FormLogin";
import { ProtectedRoute } from "./views/util/ProtectedRoute";

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<FormLogin />} />
                <Route path="/home" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>} />


                <Route path="list-cliente" element={
                    <ProtectedRoute>
                        <ListCliente />
                    </ProtectedRoute>} />

                <Route path="list-entregador" element={
                    <ProtectedRoute>
                        <ListEntregador />
                    </ProtectedRoute>} />

                <Route path="list-produto" element={
                    <ProtectedRoute>
                        <ListProdutos />
                    </ProtectedRoute>} />

                <Route path="form-cliente" element={
                    <ProtectedRoute>
                        <FormCliente />
                    </ProtectedRoute>} />

                <Route path="form-produto" element={
                    <ProtectedRoute>
                        <FormProduto />
                    </ProtectedRoute>} />

                <Route path="form-entregador" element={
                    <ProtectedRoute>
                        <FormEntregador />
                    </ProtectedRoute>} />

                <Route path="form-categoria" element={
                    <ProtectedRoute>
                        <FormCategoriaProduto />
                    </ProtectedRoute>} />

                <Route path="list-categoria" element={
                    <ProtectedRoute>
                        <ListCategoriaProduto />
                    </ProtectedRoute>} />

                <Route path="form-endereco" element={
                    <ProtectedRoute>
                        <FormEndereco />
                    </ProtectedRoute>} />

                <Route path="form-cidade" element={
                    <ProtectedRoute>
                        <FormCidade />
                    </ProtectedRoute>} />
                    
                <Route path="list-cidade" element={
                    <ProtectedRoute>
                        <ListCidade />
                    </ProtectedRoute>} />

            </Routes>
        </>
    )
}

export default Rotas
