import { Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import { SubcategorySelection } from './routes/subcategory-selection'
import { FranchiseSelection } from './routes/franchise-selection'
import { FranchiseInfo } from './routes/franchise-info'
import { SubcategoryInfo } from './routes/subcategory-info'
import { RootLayout } from '../components/layouts/root-layout'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<SubcategorySelection />} />
                <Route path="/subcategory/:categoryId/:subcategoryId" element={<SubcategoryInfo />} />
                <Route path="/franchises/:categoryId/:subcategoryId" element={<FranchiseSelection />} />
                <Route path="/franchise/:categoryId/:subcategoryId/:franchiseId" element={<FranchiseInfo />} />
            </Route>
        </Routes>
    )
} 