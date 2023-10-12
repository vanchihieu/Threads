import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
    const user = await currentUser();
    // ~ Page ~ user: User {
    //     id: 'user_2WC5FTBOTS9VthFWj4yrsWyoqeA',
    //     passwordEnabled: false,
    //     totpEnabled: false,
    //     backupCodeEnabled: false,
    //     twoFactorEnabled: false,
    //     banned: false,
    //     createdAt: 1696223617323,
    //     updatedAt: 1696403212705,
    //     profileImageUrl: 'https://images.clerk.dev/oauth_google/img_2WC5FYTSonmtx1CEnPcYWvP1ppc',
    //     imageUrl: 'https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yV0M1RllUU29ubXR4MUNFblBjWVd2UDFwcGMifQ',
    //     hasImage: true,
    //     gender: '',
    //     birthday: '',
    //     primaryEmailAddressId: 'idn_2WC5DNUeTkNywWvWtdIiJ9rpU15',
    //     primaryPhoneNumberId: null,
    //     primaryWeb3WalletId: null,
    //     lastSignInAt: 1696403212677,
    //     externalId: null,
    //     username: 'hieu',
    //     firstName: 'Hiếu',
    //     lastName: 'Văn Chí',
    //     publicMetadata: {},
    //     privateMetadata: {},
    //     unsafeMetadata: {},
    //     emailAddresses: [
    //       EmailAddress {
    //         id: 'idn_2WC5DNUeTkNywWvWtdIiJ9rpU15',
    //         emailAddress: 'vanchihieu3@gmail.com',
    //         verification: [Verification],
    //         linkedTo: [Array]
    //       }
    //     ],
    //     phoneNumbers: [],
    //     web3Wallets: [],
    //     externalAccounts: [
    //       ExternalAccount {
    //         id: 'idn_2WC5DKhC75JvgOVND93jDpuUAQR',
    //         provider: undefined,
    //         identificationId: undefined,
    //         externalId: undefined,
    //         approvedScopes: 'email https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid profile',
    //         emailAddress: 'vanchihieu3@gmail.com',
    //         firstName: undefined,
    //         lastName: undefined,
    //         picture: undefined,
    //         imageUrl: undefined,
    //         username: null,
    //         publicMetadata: {},
    //         label: null,
    //         verification: [Verification]
    //       }
    //     ]
    //   }

    if (!user) return null;

    // fetch organization list created by user
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    return (
        <>
            <h1 className="head-text">Create Thread</h1>

            <PostThread userId={userInfo._id} />
        </>
    );
}

export default Page;
