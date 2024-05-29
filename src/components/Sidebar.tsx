import { HStack, IconButton, Logo, SideBar, VStack } from "@inovaetech/components-react";
import { useTheme } from "@inovaetech/components-react";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
    const { changeTheme, isDark } = useTheme();
    return (
        <HStack className="h-full w-full">
            <SideBar logo={<Logo size={50} logo="1"></Logo>}>
                <SideBar.Content className="h-[70%]">
                    <SideBar.Item
                        label="Home"
                        href="/home"
                        icon={"PiHouse"} //home
                        activeIcon={"PiHouseFill"}
                    />
                    <SideBar.Item label="SA" icon={"PiNote"} activeIcon={"PiNoteFill"}>
                        <SideBar.Group label="Consulta" icon="PiMagnifyingGlass">
                            <SideBar.GroupItem href="/consulta" icon="PiNoteFill" label="Consulta SA" />
                            <SideBar.GroupItem href="/saida" icon={"PiTruckFill"} label="Consulta Despacho" />
                        </SideBar.Group>
                        <SideBar.Group href="/adicionar" label="Adicionar" icon="PiPlusBold" />
                        <SideBar.Group href="/alterar" label="Alterar" icon="PiArrowsClockwise" />
                        <SideBar.Group href="/layout/lists" label="Excluir" icon="PiMinus" />
                        <SideBar.Group href="/aprovar" label="Aprovar" icon="PiCheckFill" />
                    </SideBar.Item>
                    <SideBar.Item label="Desmontagens" icon={"PiHammer"} activeIcon={"PiHammerFill"}>
                        <SideBar.Group label="Consulta" icon="PiMagnifyingGlass">
                            <SideBar.GroupItem href="/desmontagens" icon="PiNoteFill" label="Consulta Desmonstagem" />
                        </SideBar.Group>
                        <SideBar.Group label="Desmonstagens" icon="PiHammerFill"></SideBar.Group>
                    </SideBar.Item>
                    <SideBar.Item label="Relatorios" icon="PiNewspaperBold"></SideBar.Item>
                    <SideBar.Item label="Monitoria" icon="PiChartDonutFill"></SideBar.Item>
                </SideBar.Content>
                <SideBar.Footer className="h-[20%]">
                    <IconButton
                        className={`${isDark ? "text-warning-500" : "text-yellow-500"} mb-2`}
                        icon={isDark ? "PiMoonFill" : "PiSunFill"}
                        onPress={() => {
                            changeTheme();
                        }}
                    />
                    <SideBar.Item label="Configurações" href="/" icon={"PiGear"} activeIcon={"PiGearFill"} />
                    <SideBar.Item
                        label="Sair"
                        href="/"
                        icon={"PiArrowSquareLeftBold"}
                        activeIcon={"PiArrowSquareLeftFill"}
                    />
                </SideBar.Footer>
            </SideBar>
            <VStack bg="background" className="relative overflow-y-auto w-full h-full">
                <Outlet />
            </VStack>
        </HStack>
    );
}
