'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';

const ClientSideRoute = ({
   children,
   route,
}: {
   children: ReactNode;
   route: string;
}) => {
   return <Link href={route}>{children}</Link>;
};

export default ClientSideRoute;
