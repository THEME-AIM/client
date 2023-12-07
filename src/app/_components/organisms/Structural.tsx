'use client';
import Box from '@components/atoms/Box';
import { statusTabList } from '@constants/navList';
import { cls } from '@utils/util';
import { useState } from 'react';
import IPByFloor from '@components/organisms/IPByFloor';
import IPByDepartment from '@components/organisms/IPByDepartment';

const Structural = () => {
  const [tab, setTab] = useState(statusTabList[0].title);
  const handleSelectTab = (tab: string) => {
    setTab(tab);
  };
  return (
    <Box className="w-4/5 max-w-[1192px] h-[984px]  pt-[0px]">
      <header className="flex sticky top-0 pt-[32px] mb-[56px] w-full bg-white">
        {statusTabList.map(({ id, koTitle, title }) => {
          return (
            <p
              key={id}
              className={cls(
                tab === title ? 'border-b-main text-main' : '',
                'w-[85px] text-center border-b z-10 cursor-pointer'
              )}
              onClick={() => handleSelectTab(title)}>
              {koTitle}
            </p>
          );
        })}

        <div className="absolute border-b-2 bottom-0 left-0 right-0" />
      </header>
      {tab === statusTabList[0].title ? <IPByFloor /> : <IPByDepartment />}
    </Box>
  );
};

export default Structural;